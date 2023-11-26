import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialProjectsComponent } from './residential-projects.component';

describe('ResidentialProjectsComponent', () => {
  let component: ResidentialProjectsComponent;
  let fixture: ComponentFixture<ResidentialProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentialProjectsComponent]
    });
    fixture = TestBed.createComponent(ResidentialProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
