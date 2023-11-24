import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProfilePicturePage } from '../profile-picture/profile-picture.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  constructor(
    public authService: AuthService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  profile: String = '';
  userName: String = '';

  imagePaths: string[] = [
    '../../../assets/coreto.png',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem2.jpg',
    '../../../assets/paisagem3.jpg',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem3.jpg',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem2.jpg',
    '../../../assets/paisagem3.jpg',
    '../../../assets/paisagem4.jpeg',
    '../../../assets/coreto.png',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem2.jpg',
    '../../../assets/paisagem3.jpg',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem1.jpg',
    '../../../assets/paisagem2.jpg',
    '../../../assets/paisagem3.jpg',
    '../../../assets/paisagem4.jpeg',
    // para chmar a API
  ];

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ProfilePicturePage,
      //  cssClass, componentProps, etc.
    });
    await modal.present();
  }

  ionViewWillEnter() {
    this.authService.findLoggedUser().subscribe((user) => {
      console.log('Usuario: ', user /*'Nome : ', user.name*/),
        (this.userName = user.name);
    });
  }
}
