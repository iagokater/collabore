import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordEditPageRoutingModule } from './password-edit-routing.module';

import { PasswordEditPage } from './password-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordEditPageRoutingModule
  ],
  declarations: [PasswordEditPage]
})
export class PasswordEditPageModule {}
