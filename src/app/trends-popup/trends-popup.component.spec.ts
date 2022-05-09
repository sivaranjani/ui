import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendsPopupComponent } from './trends-popup.component';

describe('TrendsPopupComponent', () => {
  let component: TrendsPopupComponent;
  let fixture: ComponentFixture<TrendsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
