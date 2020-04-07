import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAlertsComponent } from './food-alerts.component';

describe('FoodAlertsComponent', () => {
  let component: FoodAlertsComponent;
  let fixture: ComponentFixture<FoodAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
