import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourObjectComponent } from './tour-object.component';

describe('TourObjectComponent', () => {
  let component: TourObjectComponent;
  let fixture: ComponentFixture<TourObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
