import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-edit',
  templateUrl: './password-edit.page.html',
  styleUrls: ['./password-edit.page.scss'],
})
export class PasswordEditPage implements OnInit {
  public passVisuAct: boolean = false;
  public passVisuNew: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  passVisibilityActual() {
    this.passVisuAct = !this.passVisuAct;
  }

  passVisibilityNew() {
    this.passVisuNew = !this.passVisuNew;
  }

}
