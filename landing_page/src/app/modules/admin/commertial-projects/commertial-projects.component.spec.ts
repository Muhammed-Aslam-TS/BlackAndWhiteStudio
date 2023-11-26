import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommertialProjectsComponent } from './commertial-projects.component';

describe('CommertialProjectsComponent', () => {
  let component: CommertialProjectsComponent;
  let fixture: ComponentFixture<CommertialProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommertialProjectsComponent]
    });
    fixture = TestBed.createComponent(CommertialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
