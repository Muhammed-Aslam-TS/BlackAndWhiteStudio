import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInnTouchComponent } from './get-inn-touch.component';

describe('GetInnTouchComponent', () => {
  let component: GetInnTouchComponent;
  let fixture: ComponentFixture<GetInnTouchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetInnTouchComponent]
    });
    fixture = TestBed.createComponent(GetInnTouchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
