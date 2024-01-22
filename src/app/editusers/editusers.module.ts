import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditusersPageRoutingModule } from './editusers-routing.module';

import { EditusersPage } from './editusers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditusersPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditusersPage]
})
export class EditusersPageModule {}
