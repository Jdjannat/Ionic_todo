import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddusersService } from '../_service/addusers.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.page.html',
  styleUrls: ['./editusers.page.scss'],
})
export class EditusersPage implements OnInit {
  user: any;

  editForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private adduserService: AddusersService,
    private alertController: AlertController
  ) {
    //   this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
  }

  ngOnInit() {
    this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];
    console.log("this.user", this.user)

    this.editForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, Validators.required],
      mobile: [this.user.mobile],
      gender: [this.user.gender],
      address: [this.user.address],
    });
  }


  onSubmit(id: any, updatedUser: any) {
    this.adduserService.updateUser(id, updatedUser).subscribe((response) => {
      console.log("Update response:", response);
      this.router.navigate(['/']);
      this.presentAlert('Success', 'Form submitted successfully');

    },
      (error) => {
        console.error('Error Updating user:', error);
        this.presentAlert('Error', 'Failed to submit form');

      })
  }
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
