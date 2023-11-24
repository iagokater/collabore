import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePicturePage } from '../profile-picture/profile-picture.page';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage{
  public userForm = new FormGroup({
    name:new FormControl(``,[Validators.required])
  })
  constructor(private modalController: ModalController,public authService: AuthService,private http: HttpClient) { }

  ionViewWillEnter() {
    this.authService.findLoggedUser()
      .subscribe((user) => {
        console.log('Usuario: ', user, /*'Nome : ', user.name*/), (
          this.userForm.controls.name.patchValue(user.name)
          );
      });
  }

  profile: string = '';
  userName: string = 'UserAPI';

  async openImageUploadModal() {
    const modal = await this.modalController.create({
      component: ProfilePicturePage,
      /*cssClass: ,*/
    });
  
    return await modal.present();
  }  

  async save(){
    const {name} =this.userForm.value
    if(!name){
      throw new Error("nome não informado");
    }
    this.setName(name);
  }

  //TODO: precisa mostrar para o usuario que está carregando:

  async setName(newName:string){
    this.http.patch(`${environment.API}/user/setName`,{newName}).subscribe(
      ()=>{
        alert(`foi`)
      }
    )
  }

}
