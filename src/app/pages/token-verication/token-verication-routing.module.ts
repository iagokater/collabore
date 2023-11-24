import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenVericationPage } from './token-verication.page';

const routes: Routes = [
  {
    path: '',
    component: TokenVericationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokenVericationPageRoutingModule {}
