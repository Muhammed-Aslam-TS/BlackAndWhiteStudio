import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupButtonForContactFormComponent } from './popup-button-for-contact-form.component';

describe('PopupButtonForContactFormComponent', () => {
  let component: PopupButtonForContactFormComponent;
  let fixture: ComponentFixture<PopupButtonForContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupButtonForContactFormComponent]
    });
    fixture = TestBed.createComponent(PopupButtonForContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
