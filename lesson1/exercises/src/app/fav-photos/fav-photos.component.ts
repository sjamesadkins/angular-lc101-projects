import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Top Photos from 2022';
  image1 = 'https://media.istockphoto.com/id/163113558/photo/map-of-green-ukraine-on-a-globe.jpg?s=612x612&w=0&k=20&c=7PVFwVQw0UMR7iM6TTqsTLo_-zA24SPFIYfRfsrU4hQ=';
  image2 = 'https://mymodernmet.com/wp/wp-content/uploads/2022/04/debora-lombardi-ultraviolet-light-flower-photography-5.jpeg';
  image3 = 'https://media.istockphoto.com/id/1047316896/photo/st-louis-downtown-city-skyline.jpg?s=612x612&w=0&k=20&c=hA52aCm9Jzqltz0d5zf-aGi4enq4yZVKJBompG5Mz8k=';

  constructor() { }

  ngOnInit() {
  }

}