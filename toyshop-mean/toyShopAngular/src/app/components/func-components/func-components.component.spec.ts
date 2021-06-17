import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncComponentsComponent } from './func-components.component';

describe('FuncComponentsComponent', () => {
  let component: FuncComponentsComponent;
  let fixture: ComponentFixture<FuncComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
