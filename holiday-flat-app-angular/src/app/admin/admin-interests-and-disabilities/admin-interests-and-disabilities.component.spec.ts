import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInterestsAndDisabilitiesComponent } from './admin-interests-and-disabilities.component';

describe('AdminInterestsAndDisabilitiesComponent', () => {
  let component: AdminInterestsAndDisabilitiesComponent;
  let fixture: ComponentFixture<AdminInterestsAndDisabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInterestsAndDisabilitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInterestsAndDisabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
