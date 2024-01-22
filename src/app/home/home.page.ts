import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddusersService } from '../_service/addusers.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any = []
  id!: number;
  constructor(private router: Router,
    private alertController: AlertController,
    private adduserService: AddusersService) { }
  ngOnInit() {
    this.getusers();
    console.log("users", this.users)
  }
  addUsers() {
    this.router.navigate(['/users-form']);
  }

  getusers() {
    this.adduserService.getUsers().subscribe((users) => {
      this.users = users;
      console.log("data", users)

    })
  }

  onEdit(id: number) {
    this.adduserService.getUserById(id).subscribe((user) => {
      console.log("uaer|||||", user)
      this.router.navigate(['/editusers'], { state: { user } });
    })
  }

  async presentAlert(id: number) {
    const alert = await this.alertController.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Yes',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.onDelete(id);
          }
        }
      ]
    });

    await alert.present();
  }

  onDelete(id: number) {
    this.adduserService.deleteUser(id).subscribe(
      (response) => {
        console.log("Delete response:", response);

        // Update local data to remove the deleted user
        this.users = this.users.filter((user: { id: number; }) => user.id !== id);
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

}
