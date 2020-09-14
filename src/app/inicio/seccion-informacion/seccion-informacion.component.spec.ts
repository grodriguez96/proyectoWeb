import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInformacionComponent } from './seccion-informacion.component';

describe('SeccionInformacionComponent', () => {
  let component: SeccionInformacionComponent;
  let fixture: ComponentFixture<SeccionInformacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionInformacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
