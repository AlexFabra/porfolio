import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';


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

  @ViewChild('wrapper') wrapperRef!: ElementRef;
  @ViewChild('cellBackground') cellBackgroundRef!: ElementRef;

  @Input() set dataToShow(value: string[]) {
    this._dataToShow = this.removeDuplicates(value);
  }

  @Input() hideOption: boolean = false;

  @Input() columnNumber!: number;

  @Input() color!: string;

  @Input() backgroundColor!: string

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    try {
      
      if (this.wrapperRef && this.cellBackgroundRef) {
        const wrapper = this.wrapperRef.nativeElement;
        const cellBackground = this.cellBackgroundRef.nativeElement;
        this.renderer.setStyle(wrapper, 'grid-template-columns', `repeat(${this.columnNumber}, 1fr)`);
        this.renderer.setStyle(wrapper, 'background-color', this.backgroundColor);
        this.renderer.setStyle(cellBackground, 'background-color', this.color);
      }
    } catch (e) {
      console.log(e);
    }
  }

  showAllSelected() {
    this.isShowAllSelected = !this.isShowAllSelected;
    this.mostrarOcultar = this.isShowAllSelected ? 'Ocultar' : 'Mostrar';
  }

  removeDuplicates(dates: string[]) {
    return [...new Set(dates)];
  }

}
