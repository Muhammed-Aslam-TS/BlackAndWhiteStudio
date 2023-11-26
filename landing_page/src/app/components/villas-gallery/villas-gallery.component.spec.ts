import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasGalleryComponent } from './villas-gallery.component';

describe('VillasGalleryComponent', () => {
  let component: VillasGalleryComponent;
  let fixture: ComponentFixture<VillasGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillasGalleryComponent]
    });
    fixture = TestBed.createComponent(VillasGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
