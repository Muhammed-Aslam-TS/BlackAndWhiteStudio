import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintResponseComponent } from './clint-response.component';

describe('ClintResponseComponent', () => {
  let component: ClintResponseComponent;
  let fixture: ComponentFixture<ClintResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClintResponseComponent]
    });
    fixture = TestBed.createComponent(ClintResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
