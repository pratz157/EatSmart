import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpLoggedInHeaderComponent } from './emp-logged-in-header.component';

describe('EmpLoggedInHeaderComponent', () => {
  let component: EmpLoggedInHeaderComponent;
  let fixture: ComponentFixture<EmpLoggedInHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpLoggedInHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpLoggedInHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
