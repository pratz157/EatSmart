import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanManagerLoggedInPageComponent } from './can-manager-logged-in-page.component';

describe('CanManagerLoggedInPageComponent', () => {
  let component: CanManagerLoggedInPageComponent;
  let fixture: ComponentFixture<CanManagerLoggedInPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanManagerLoggedInPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanManagerLoggedInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
