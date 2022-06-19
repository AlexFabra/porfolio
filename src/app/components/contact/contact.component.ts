import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
