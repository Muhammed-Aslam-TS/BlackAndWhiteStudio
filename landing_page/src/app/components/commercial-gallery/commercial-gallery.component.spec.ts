import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialGalleryComponent } from './commercial-gallery.component';

describe('CommercialGalleryComponent', () => {
  let component: CommercialGalleryComponent;
  let fixture: ComponentFixture<CommercialGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommercialGalleryComponent]
    });
    fixture = TestBed.createComponent(CommercialGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
