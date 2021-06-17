import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpcomponentComponent } from './tpcomponent.component';

describe('TpcomponentComponent', () => {
  let component: TpcomponentComponent;
  let fixture: ComponentFixture<TpcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
