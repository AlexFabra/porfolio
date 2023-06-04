import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  languages:any[] = [{name:'English',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978067/english_ymrs4j.png',level:'B1'},{name:'Catalan',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978067/cat_r3pd3g.png',level:'C2'},{name:'Spanish',img:'https://res.cloudinary.com/dlmdj7zsu/image/upload/v1655978066/esp_xwvoa1.png',level:'C2'}]

  constructor() { }

  ngOnInit(): void {}

}
