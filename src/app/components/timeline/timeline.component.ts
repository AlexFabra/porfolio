import { AfterViewInit, Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import * as echarts from 'echarts';

export interface timelineItem {
  id: string;
  title: string | number;
  description?: string | number;
  location?: string;
  date?: string | number;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

//needs bootstrap css and js

export class TimelineComponent implements AfterViewInit, OnChanges {

  @Input() items: timelineItem[] = [];
  @Input() pointColor: string = 'red';

  constructor(private renderer: Renderer2,private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.setPointColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // for (const propName in changes) {
    //   if (changes.hasOwnProperty(propName)) {
    //     switch (propName) {
    //       case 'items':
    //         this.setPointColor();
    //         break;
    //       case 'pointColor':
    //         this.setPointColor();
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    // }
  }

  setPointColor() {
      const elements = this.el.nativeElement.querySelectorAll('.timeline-point');
      elements.forEach((element:any) => {
        this.renderer.setStyle(element, 'background-color', this.pointColor);
      });
  }

}
