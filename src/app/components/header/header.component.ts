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
  
  constructor() { }

  ngOnInit(): void {
  }



}
