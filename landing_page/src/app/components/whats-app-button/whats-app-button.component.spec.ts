import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppButtonComponent } from './whats-app-button.component';

describe('WhatsAppButtonComponent', () => {
  let component: WhatsAppButtonComponent;
  let fixture: ComponentFixture<WhatsAppButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhatsAppButtonComponent]
    });
    fixture = TestBed.createComponent(WhatsAppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
