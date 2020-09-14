import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasPaginaComponent } from './preguntas-pagina.component';

describe('PreguntasPaginaComponent', () => {
  let component: PreguntasPaginaComponent;
  let fixture: ComponentFixture<PreguntasPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
