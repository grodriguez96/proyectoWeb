import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificarCorreoRoutingModule } from './verificar-correo-routing.module';
import { VerificarCorreoComponent } from './verificar-correo.component';


@NgModule({
  declarations: [VerificarCorreoComponent],
  imports: [
    CommonModule,
    VerificarCorreoRoutingModule
  ]
})
export class VerificarCorreoModule { }
