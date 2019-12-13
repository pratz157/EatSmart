import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanManagerLoginPageComponent } from './can-manager-login-page.component';

describe('CanManagerLoginPageComponent', () => {
  let component: CanManagerLoginPageComponent;
  let fixture: ComponentFixture<CanManagerLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanManagerLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanManagerLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
