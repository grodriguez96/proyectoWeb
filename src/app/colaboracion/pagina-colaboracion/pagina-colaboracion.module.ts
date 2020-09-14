import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompartidosModule} from '../../compartidos/compartidos.module'


import { PaginaColaboracionRoutingModule } from './pagina-colaboracion-routing.module';
import { PaginaColaboracionComponent } from './pagina-colaboracion.component';


@NgModule({
  declarations: [PaginaColaboracionComponent],
  imports: [
    CommonModule,
    PaginaColaboracionRoutingModule,
    CompartidosModule,
  ]
})
export class PaginaColaboracionModule { }
