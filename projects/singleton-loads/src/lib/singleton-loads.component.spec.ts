import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonLoadsComponent } from './singleton-loads.component';

describe('SingletonLoadsComponent', () => {
  let component: SingletonLoadsComponent;
  let fixture: ComponentFixture<SingletonLoadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletonLoadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonLoadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
