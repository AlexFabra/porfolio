import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrls: ['./data-viewer.component.css']
})
export class DataViewerComponent {

  _dataToShow: string[] = [];
  isShowAllSelected: boolean = true;
  mostrarOcultar: string = 'Ocultar';
  showProperty: string = '';

  @Input() set dataToShow(value: string[]) {
    this._dataToShow = this.removeDuplicates(value);
  }
  @Input() hideOption: boolean = false;

  @Input() set columnNumber(value: number) {
    setTimeout(() => {
      try {
        let element = document.getElementsByClassName('wrapper');
        element[0].setAttribute('style', `grid-template-columns:repeat(${value}, 1fr)`);
      } catch (e) {
        console.log(e);
      }
    }, 10);
  }

  @Input() set color(value: string) {
    setTimeout(() => {
      try {
        let element = document.getElementsByClassName('cellBackground');
        element[0].setAttribute('style', `background-color:${value}`);
      } catch (e) {
        console.log(e);
      }
    }, 10);
  }

  @Input() set backgroundColor(value: string) {
    setTimeout(() => {
      try {
        let element = document.getElementsByClassName('wrapper');
        element[0].setAttribute('style', `background-color:${value}`);
      } catch (e) {
        console.log(e);
      }
    }, 10);
  }

  constructor() {
  }

  showAllSelected() {
    if (this.isShowAllSelected) {
      this.isShowAllSelected = false;
      this.mostrarOcultar = 'Mostrar';
    } else {
      this.isShowAllSelected = true;
      this.mostrarOcultar = 'Ocultar'
    }
  }
  removeDuplicates(dates: string[]) {
    return [...new Set(dates)];
  }

}
