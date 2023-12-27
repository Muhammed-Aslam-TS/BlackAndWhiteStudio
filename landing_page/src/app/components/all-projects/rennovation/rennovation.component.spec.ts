import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RennovationComponent } from './rennovation.component';

describe('RennovationComponent', () => {
  let component: RennovationComponent;
  let fixture: ComponentFixture<RennovationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RennovationComponent]
    });
    fixture = TestBed.createComponent(RennovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
