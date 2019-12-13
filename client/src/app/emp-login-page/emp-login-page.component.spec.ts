import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLoginPageComponent } from './emp-login-page.component';

describe('EmpLoginPageComponent', () => {
  let component: EmpLoginPageComponent;
  let fixture: ComponentFixture<EmpLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
