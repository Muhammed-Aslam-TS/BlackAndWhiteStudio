import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerSectionComponent } from './partner-section.component';

describe('PartnerSectionComponent', () => {
  let component: PartnerSectionComponent;
  let fixture: ComponentFixture<PartnerSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerSectionComponent]
    });
    fixture = TestBed.createComponent(PartnerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
