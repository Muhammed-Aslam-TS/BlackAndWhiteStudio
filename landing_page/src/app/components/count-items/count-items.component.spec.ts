import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountItemsComponent } from './count-items.component';

describe('CountItemsComponent', () => {
  let component: CountItemsComponent;
  let fixture: ComponentFixture<CountItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountItemsComponent]
    });
    fixture = TestBed.createComponent(CountItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
