import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carrousel',
  templateUrl: './img-carrousel.component.html',
  styleUrls: ['./img-carrousel.component.css']
})
export class ImgCarrouselComponent implements OnInit {

  @Input() imgs: string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
