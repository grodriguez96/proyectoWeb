import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioComunicadosComponent } from './usuario-comunicados.component';

describe('UsuarioComunicadosComponent', () => {
  let component: UsuarioComunicadosComponent;
  let fixture: ComponentFixture<UsuarioComunicadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComunicadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioComunicadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
