import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-password-forget',
  templateUrl: './password-forget.page.html',
  styleUrls: ['./password-forget.page.scss'],
})
export class PasswordForgetPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
