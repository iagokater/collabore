import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokenVericationPageRoutingModule } from './token-verication-routing.module';

import { TokenVericationPage } from './token-verication.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokenVericationPageRoutingModule
  ],
  declarations: [TokenVericationPage]
})
export class TokenVericationPageModule {}
