import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranganComponent } from './sarangan.component';

describe('SaranganComponent', () => {
  let component: SaranganComponent;
  let fixture: ComponentFixture<SaranganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaranganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaranganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
