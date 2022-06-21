import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-carrousel',
  templateUrl: './img-carrousel.component.html',
  styleUrls: ['./img-carrousel.component.css']
})
export class ImgCarrouselComponent implements OnInit {

  @Input() imgs: string[]=[];
  documentSelection:boolean = false;
  imgSelector:boolean=false;
  selection:number=1;

  constructor() { }

  ngOnInit(): void {    
  }

  openImgSelector() {
    this.documentSelection = !this.documentSelection;
  }

  changeSelection(index:number){
    this.selection=index;
    this.documentSelection = !this.documentSelection;
  }

}
