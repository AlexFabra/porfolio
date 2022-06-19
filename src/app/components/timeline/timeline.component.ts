import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  constructor() { }

  ngAfterViewInit(): void {
    this.setPointColor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'items':
            console.log('ep')
            this.setPointColor();
            break;
          case 'pointColor':
            this.setPointColor();
            break;
          default:
            break;
        }
      }
    }
  }

  setPointColor() {
    setTimeout(() => {
      let elements = document.getElementsByClassName('timeline-point');
      for (var i = 0; i < elements.length; i++) {
        console.log(elements[i])
        elements[i].setAttribute('style', `background-color:${this.pointColor}`)
      }
    }, 5)
  }

}
