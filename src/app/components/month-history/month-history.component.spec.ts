import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthHistoryComponent } from './month-history.component';

describe('MonthHistoryComponent', () => {
  let component: MonthHistoryComponent;
  let fixture: ComponentFixture<MonthHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
