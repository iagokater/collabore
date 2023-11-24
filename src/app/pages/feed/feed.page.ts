import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';
import { City, Post } from 'src/app/shared/models/post';
import { SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  initialCity = 'Marilia';
  posts: Post[] = [];
  comentary: string ='';
  limitCard: number = 85;
  searchQuery: string = '';
  cities: City[] = [];
  showList = false;

  constructor(private router: Router, private postService: PostService) {}

  async ngOnInit() {
    await this.getPostsByCity(this.initialCity);
    await this.getCity();
  }

  toggleList() {
    this.showList = !this.showList;
  }

  hideList() {
    this.showList = false;
  }

  handleInput($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {
    this.searchQuery = $event.detail.value ? $event.detail.value : '';
    this.getPostsByCity(this.searchQuery);
  }

  selectCity(city: string) {
    this.searchQuery = city;
    this.getPostsByCity(this.searchQuery);
    this.hideList();
  }

  filterCities() {
    return this.cities.filter(city => city.city.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }

  async getCity() {
    const observable = await this.postService.getCity();
    observable.subscribe(
      (data: any) => {
        this.cities = data.cities || [];
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  async getPostsByCity(city: string) {
    const observable = await this.postService.getPostByCity(city);
    observable.subscribe(
      (data: any) => {
        this.posts = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  fazerLogout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
