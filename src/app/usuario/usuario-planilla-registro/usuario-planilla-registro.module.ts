import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioPlanillaRegistroRoutingModule } from './usuario-planilla-registro-routing.module';
import { UsuarioPlanillaRegistroComponent } from './usuario-planilla-registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuarioPlanillaRegistroComponent],
  imports: [
    CommonModule,
    UsuarioPlanillaRegistroRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsuarioPlanillaRegistroModule { }
