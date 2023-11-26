import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPojectsComponent } from './commercial-pojects.component';

describe('CommercialPojectsComponent', () => {
  let component: CommercialPojectsComponent;
  let fixture: ComponentFixture<CommercialPojectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialPojectsComponent]
    });
    fixture = TestBed.createComponent(CommercialPojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
