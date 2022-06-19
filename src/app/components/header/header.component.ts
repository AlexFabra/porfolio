import { Component, OnInit } from '@angular/core';
import { timelineItem } from '../timeline/timeline.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = 'Alejandro Fabra Segarra';
  profession: string = 'FullStack Developer';
  telf: string = '677482553';
  email: string = 'alfaseart@gmail.com';
  IsContactDataOpened:boolean=false;
  contactData:string[]=[this.telf,this.email];
  
  constructor() { }

  ngOnInit(): void {
  }

  openContactData(){
    this.IsContactDataOpened=!this.IsContactDataOpened;
  }

}
