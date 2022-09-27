import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorPlanComponent } from './visitor-plan.component';

describe('VisitorPlanComponent', () => {
  let component: VisitorPlanComponent;
  let fixture: ComponentFixture<VisitorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
