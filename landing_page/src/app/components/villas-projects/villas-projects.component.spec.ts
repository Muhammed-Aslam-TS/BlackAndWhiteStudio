import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillasProjectsComponent } from './villas-projects.component';

describe('VillasProjectsComponent', () => {
  let component: VillasProjectsComponent;
  let fixture: ComponentFixture<VillasProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VillasProjectsComponent]
    });
    fixture = TestBed.createComponent(VillasProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
