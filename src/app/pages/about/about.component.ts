import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  languages:any[] = [{name:'Anglès',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978067/english_ymrs4j.png',level:'B1'},{name:'Català',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978067/cat_r3pd3g.png',level:'C1'},{name:'Castellà',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978066/esp_xwvoa1.png',level:'Nadiu'}]

  constructor() { }

  ngOnInit(): void {
  }

}
