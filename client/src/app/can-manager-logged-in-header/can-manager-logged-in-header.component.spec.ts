import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanManagerLoggedInHeaderComponent } from './can-manager-logged-in-header.component';

describe('CanManagerLoggedInHeaderComponent', () => {
  let component: CanManagerLoggedInHeaderComponent;
  let fixture: ComponentFixture<CanManagerLoggedInHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanManagerLoggedInHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanManagerLoggedInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
