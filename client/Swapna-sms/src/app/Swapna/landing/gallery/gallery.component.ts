import { Component, OnInit } from '@angular/core';
import { Image } from 'angular2_photoswipe';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  image1: Image;
  image2: Image;
  image3: Image;
  image4: Image;
  image5: Image;
  image6: Image;
  image7: Image;
  image8: Image;


  constructor() { }

  ngOnInit() {
    this.image1 = new Image();
    this.image1.largeUrl = 'https://picsum.photos/4934/3296/?image=1';
    this.image1.height = 3296;
    this.image1.width = 4934;
    this.image1.id = 0;
    this.image1.size = `${this.image1.width}x${this.image1.height}`;
    this.image1.thumbUrl = 'https://picsum.photos/300/200/?image=1';
    this.image1.description = 'hello world';
    this.image1.author = 'David Wollschlegel';

    this.image2 = new Image();
    this.image2.largeUrl = 'https://picsum.photos/4934/3296/?image=0';
    this.image2.height = 3296;
    this.image2.width = 4934;
    this.image2.id = 1;
    this.image2.size = `${this.image2.width}x${this.image2.height}`;
    this.image2.thumbUrl = 'https://picsum.photos/300/200/?image=0';

    this.image3 = new Image();
    this.image3.largeUrl = 'https://picsum.photos/4934/3296/?image=0';
    this.image3.height = 3296;
    this.image3.width = 4934;
    this.image3.id = 3;
    this.image3.size = `${this.image3.width}x${this.image3.height}`;
    this.image3.thumbUrl = 'https://picsum.photos/300/200/?image=0';

    this.image4 = new Image();
    this.image4.largeUrl = 'https://picsum.photos/4934/3296/?image=0';
    this.image4.height = 3296;
    this.image4.width = 4934;
    this.image4.id = 4;
    this.image4.size = `${this.image4.width}x${this.image4.height}`;
    this.image4.thumbUrl = 'https://picsum.photos/300/200/?image=0';
  }

}
