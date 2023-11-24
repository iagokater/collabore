import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss'],
})
export class NewPostPage implements OnInit {
  imageUrl: string = "";
  constructor() {}

  selectedSegment: string = 'elogio';

  ngOnInit() {}

  segmentChanged(segment: string) {
    this.selectedSegment = segment;
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: true,
      resultType: CameraResultType.Base64,
    });

    var imageUrl = "data:image/jpeg;base64,"+image.base64String;

    // Can be set to the src of an image now
    this.imageUrl = imageUrl!;
  };
}
