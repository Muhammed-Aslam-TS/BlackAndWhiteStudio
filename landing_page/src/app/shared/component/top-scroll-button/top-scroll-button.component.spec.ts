import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopScrollButtonComponent } from './top-scroll-button.component';

describe('TopScrollButtonComponent', () => {
  let component: TopScrollButtonComponent;
  let fixture: ComponentFixture<TopScrollButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopScrollButtonComponent]
    });
    fixture = TestBed.createComponent(TopScrollButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
