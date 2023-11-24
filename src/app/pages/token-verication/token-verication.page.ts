import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-token-verication',
  templateUrl: './token-verication.page.html',
  styleUrls: ['./token-verication.page.scss'],
})
export class TokenVericationPage implements OnInit {

  constructor(private authService: AuthService) { }

  token!: Promise<string | null>;

  ngOnInit() {
  }

  verifyToken() {
    this.authService.verifyToken(this.token).subscribe({
      next: (auth) => {
        console.log('Verificação concluída com sucesso! ', auth)
      },
      error: (erro) => {
        console.error("Erro =>", erro);
      }
    })
  }

  // tokenVerification(){
  //   this.authService.verifyToken({tokenCode: this.token}, this.authService.getToken());
  // };

}
