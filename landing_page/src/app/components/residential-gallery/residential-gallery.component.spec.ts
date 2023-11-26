import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialGalleryComponent } from './residential-gallery.component';

describe('ResidentialGalleryComponent', () => {
  let component: ResidentialGalleryComponent;
  let fixture: ComponentFixture<ResidentialGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentialGalleryComponent]
    });
    fixture = TestBed.createComponent(ResidentialGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
