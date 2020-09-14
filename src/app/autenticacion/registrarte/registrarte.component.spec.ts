import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarteComponent } from './registrarte.component';

describe('RegistrarteComponent', () => {
  let component: RegistrarteComponent;
  let fixture: ComponentFixture<RegistrarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
