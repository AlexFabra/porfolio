import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  languages:any[] = [{name:'Anglès',img:'./assets/img/english.png',level:'B1'},{name:'Català',img:'./assets/img/cat.png',level:'C1'},{name:'Castellà',img:'./assets/img/esp.png',level:'Nadiu'}]

  constructor() { }

  ngOnInit(): void {
  }

}
