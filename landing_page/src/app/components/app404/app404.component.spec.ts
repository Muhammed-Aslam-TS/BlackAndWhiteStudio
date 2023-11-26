import { ComponentFixture, TestBed } from '@angular/core/testing';

import { App404Component } from './app404.component';

describe('App404Component', () => {
  let component: App404Component;
  let fixture: ComponentFixture<App404Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [App404Component]
    });
    fixture = TestBed.createComponent(App404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
