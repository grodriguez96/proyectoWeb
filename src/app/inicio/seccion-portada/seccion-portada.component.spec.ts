import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPortadaComponent } from './seccion-portada.component';

describe('SeccionPortadaComponent', () => {
  let component: SeccionPortadaComponent;
  let fixture: ComponentFixture<SeccionPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
