import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CreateAccount, GoogleInfos, Login, VerifyToken } from '../models/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Storage } from '@ionic/storage-angular';

const KEY = 'token';
const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  error: any;
  userInfo?: GoogleInfos;

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();

  constructor(
    private http: HttpClient, 
    public auth: AngularFireAuth,
    private storage: Storage
  ) {
    this.init();
    this.setIsAuthenticated(!!this.getToken());
  }

  async init() {
    await this.storage.create();
  }

  public setIsAuthenticated(value: boolean): void {
    this.isAuthenticatedSubject.next(value);
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  getToken(): Promise<string | null> {
    return this.storage.get('token');
  }

  returnToken() {
    return localStorage.getItem(KEY) || '';
  }

  saveToken(token: string): Promise<any> {
    this.setIsAuthenticated(true);
    return this.storage.set('token', token);
  }

  deleteToken(): Promise<any> {
    this.setIsAuthenticated(false);
    return this.storage.remove('token');
  }

  haveToken() {
    const hasToken = !!this.getToken();
    return hasToken;
  }

  login(login: Login): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${API}/user/login`, login);
  }

  async googleLogin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      this.userInfo = {
        name: credential.user?.displayName as string,
        email: credential.user?.email as string,
        google_id: credential.user?.uid as string,
      };
      this.loginWithGoogle(this.userInfo).subscribe({
        next: (auth) => {
          console.info('Login efetuado com sucesso! ', auth);
        },
        error: (erro) => {
          console.error('Erro => ', erro);
        },
      });
      console.log('Usuário logado com sucesso! ', this.userInfo);
    } catch (error) {
      this.error = error;
      console.error('Erro => ', error);
    }
  }

  async googleRegister() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      this.userInfo = {
        name: credential.user?.displayName as string,
        email: credential.user?.email as string,
        google_id: credential.user?.uid as string,
      };
      this.registerWithGoogle(this.userInfo).subscribe({
        next: (auth) => {
          console.info('Cadastro efetuado com sucesso! ', auth);
        },
        error: (erro) => {
          console.error('Erro => ', erro);
        },
      });
      console.log('Usuário cadastrado com sucesso! ', this.userInfo);
    } catch (error) {
      this.error = error;
      console.error('Erro => ', error);
    }
  }

  //excluir todos os dados armazenados no localStorage
  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }

  loginWithGoogle(infos: GoogleInfos): Observable<GoogleInfos> {
    return this.http.post<GoogleInfos>(`${API}/user/loginWithGoogle`, infos);
  }

  registerWithGoogle(infos: GoogleInfos): Observable<GoogleInfos> {
    return this.http.post<GoogleInfos>(`${API}/user/registerWithGoogle`, infos);
  }

  createAccount(values: CreateAccount): Observable<CreateAccount> {
    return this.http.post<CreateAccount>(`${API}/user/register`, values);
  }

  findUser(userId: number): Observable<any> {
    return this.http.get<any>(`${API}/user/find/${userId}`);
  }

  findLoggedUser(): Observable<any> {
    return this.http.get<any>(`${API}/user/me`);
  }

  // verifyToken(values: VerifyToken, authentication: string): Observable<{ message: string }> {
  //   return this.http.post<{ message: string }>(`${API}/user/verifyEmail`, values,
  //     { headers: { Authorization: 'Bearer' + authentication } }
  //   );
  // }

  verifyToken(token: Promise<string | null>): Observable<string | null> {
    return this.http.post<string | null>(`${API}/user/verifyEmail`, token);
  } 

  // postUser(userId: number): Observable<any> {
  //   return this.http.get<any>(`${API}/user/find/post/${userId}`);
  // }
}
