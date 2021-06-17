import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedBodyComponent } from './shared-body.component';

describe('SharedBodyComponent', () => {
  let component: SharedBodyComponent;
  let fixture: ComponentFixture<SharedBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
