import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlaceComponent } from './admin-edit-place.component';

describe('AdminEditPlaceComponent', () => {
  let component: AdminEditPlaceComponent;
  let fixture: ComponentFixture<AdminEditPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPlaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
