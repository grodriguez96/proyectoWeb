import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPlanillaRegistroComponent } from './usuario-planilla-registro.component';

describe('UsuarioPlanillaRegistroComponent', () => {
  let component: UsuarioPlanillaRegistroComponent;
  let fixture: ComponentFixture<UsuarioPlanillaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPlanillaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPlanillaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
