import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompartidosModule} from '../../compartidos/compartidos.module'

import { PreguntasPaginaRoutingModule } from './preguntas-pagina-routing.module';
import { PreguntasPaginaComponent } from './preguntas-pagina.component';


@NgModule({
  declarations: [PreguntasPaginaComponent],
  imports: [
    CommonModule,
    PreguntasPaginaRoutingModule,
    CompartidosModule,
  ]
})
export class PreguntasPaginaModule { }
