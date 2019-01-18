import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public imageUrlArray:Array<String> = [
    '/assets/338881.jpg',
    '/assets/750264.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}
