import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionActividadesComponent } from './seccion-actividades.component';

describe('SeccionActividadesComponent', () => {
  let component: SeccionActividadesComponent;
  let fixture: ComponentFixture<SeccionActividadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionActividadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
