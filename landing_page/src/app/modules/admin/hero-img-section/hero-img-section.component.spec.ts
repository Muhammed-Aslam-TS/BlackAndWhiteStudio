import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImgSectionComponent } from './hero-img-section.component';

describe('HeroImgSectionComponent', () => {
  let component: HeroImgSectionComponent;
  let fixture: ComponentFixture<HeroImgSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroImgSectionComponent]
    });
    fixture = TestBed.createComponent(HeroImgSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
