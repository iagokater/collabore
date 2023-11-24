import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './auth.service';

const API = environment.API;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  user: any;
  error: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  async getPostByCity(city: string): Promise<Observable<any>> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${API}/post/city/${city}`, { headers });
  }
  async getCity(): Promise<Observable<any>> {
    const token = await this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${API}/post/city-list`, { headers });
  }

}
