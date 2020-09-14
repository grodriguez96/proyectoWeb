import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaColaboracionComponent } from './pagina-colaboracion.component';

describe('PaginaColaboracionComponent', () => {
  let component: PaginaColaboracionComponent;
  let fixture: ComponentFixture<PaginaColaboracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaColaboracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaColaboracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
