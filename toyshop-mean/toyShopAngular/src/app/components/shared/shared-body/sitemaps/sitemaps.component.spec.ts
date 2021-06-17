import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitemapsComponent } from './sitemaps.component';

describe('SitemapsComponent', () => {
  let component: SitemapsComponent;
  let fixture: ComponentFixture<SitemapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitemapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
