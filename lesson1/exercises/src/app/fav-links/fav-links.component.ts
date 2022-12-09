import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  constructor() { }

  favLinks = ["https://www.francetvinfo.fr/en-direct/radio.html", "https://angular.io/cli#command-overview", "https://tristanobeats.bandcamp.com/"]

  ngOnInit() {
  }

}
