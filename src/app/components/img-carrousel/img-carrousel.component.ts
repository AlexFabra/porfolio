import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalImgComponent } from '../modal-img/modal-img.component';

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

  @ViewChild('modalImg') private modalImg: ModalImgComponent | undefined;

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

  openModalImg(){
    return this.modalImg!.open();
  }

}
