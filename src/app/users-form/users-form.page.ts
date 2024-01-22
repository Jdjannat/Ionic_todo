import { Component } from '@angular/core';
import { AddusersService } from '../_service/addusers.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.page.html',
  styleUrls: ['./users-form.page.scss'],
})
export class UsersFormPage {
  userForm: FormGroup;

  constructor(
    private addUsersService: AddusersService,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController,

  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required]],
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;

      this.addUsersService.addUser(userData).subscribe(
        (response) => {
          console.log('User added successfully:', response);
          this.resetForm();

          this.router.navigate(['/']);
         
          this.presentAlert('Success', 'Form submitted successfully');
          },
        (error) => {
          console.error('Error adding user:', error);
          this.presentAlert('Error', 'Failed to submit form');

        }
      );
    }
  }

  resetForm() {
    this.userForm.reset();
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
