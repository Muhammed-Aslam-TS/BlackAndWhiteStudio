import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollwoUsInstagramComponent } from './follwo-us-instagram.component';

describe('FollwoUsInstagramComponent', () => {
  let component: FollwoUsInstagramComponent;
  let fixture: ComponentFixture<FollwoUsInstagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollwoUsInstagramComponent]
    });
    fixture = TestBed.createComponent(FollwoUsInstagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
