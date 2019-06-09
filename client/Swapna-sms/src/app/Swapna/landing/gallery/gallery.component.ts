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
    this.image1.largeUrl = 'assets/img/gal/black.jpg';
    this.image1.height = 3296;
    this.image1.width = 4934;
    this.image1.id = 0;
    this.image1.size = `${this.image1.width}x${this.image1.height}`;
    this.image1.thumbUrl = 'assets/img/gal/black_1.jpg';

    this.image2 = new Image();
    this.image2.largeUrl = 'assets/img/gal/black(1)_1.jpg';
    this.image2.height = 3296;
    this.image2.width = 4934;
    this.image2.id = 1;
    this.image2.size = `${this.image2.width}x${this.image2.height}`;
    this.image2.thumbUrl = 'assets/img/gal/black(1).jpg';

    this.image3 = new Image();
    this.image3.largeUrl = 'assets/img/gal/black(2)_1.jpg';
    this.image3.height = 3296;
    this.image3.width = 4934;
    this.image3.id = 2;
    this.image3.size = `${this.image3.width}x${this.image3.height}`;
    this.image3.thumbUrl = 'assets/img/gal/black(2)_1.jpg';

    this.image4 = new Image();
    this.image4.largeUrl = 'assets/img/gal/black(3)_1.jpg';
    this.image4.height = 3296;
    this.image4.width = 4934;
    this.image4.id = 4;
    this.image4.size = `${this.image4.width}x${this.image4.height}`;
    this.image4.thumbUrl = 'assets/img/gal/black(3)_1.jpg';

    this.image5= new Image();
    this.image5.largeUrl = 'assets/img/gal/black(4)_1.jpg';
    this.image5.height = 3296;
    this.image5.width = 4934;
    this.image5.id = 4;
    this.image5.size = `${this.image5.width}x${this.image5.height}`;
    this.image5.thumbUrl = 'assets/img/gal/black(4)_1.jpg';

    this.image6 = new Image();
    this.image6.largeUrl = 'assets/img/gal/black(5).jpg';
    this.image6.height = 3296;
    this.image6.width = 4934;
    this.image6.id = 4;
    this.image6.size = `${this.image6.width}x${this.image6.height}`;
    this.image6.thumbUrl = 'assets/img/gal/black(5)_1.jpg';

    this.image7 = new Image();
    this.image7.largeUrl = 'assets/img/gal/black(6).jpg';
    this.image7.height = 3296;
    this.image7.width = 4934;
    this.image7.id = 4;
    this.image7.size = `${this.image7.width}x${this.image7.height}`;
    this.image7.thumbUrl = 'assets/img/gal/black(6)_1.jpg';

    this.image8 = new Image();
    this.image8.largeUrl = 'assets/img/gal/black(7).jpg';
    this.image8.height = 3296;
    this.image8.width = 4934;
    this.image8.id = 4;
    this.image8.size = `${this.image8.width}x${this.image8.height}`;
    this.image8.thumbUrl = 'assets/img/gal/black(7)_1.jpg';
  }

}
