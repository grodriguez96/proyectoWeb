import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompartidosModule} from '../../compartidos/compartidos.module'

import { PaginaInicioRoutingModule } from './pagina-inicio-routing.module';
import { PaginaInicioComponent } from './pagina-inicio.component';
import { SeccionPortadaComponent } from '../seccion-portada/seccion-portada.component';
import { SeccionInformacionComponent } from '../seccion-informacion/seccion-informacion.component';
import { SeccionActividadesComponent } from '../seccion-actividades/seccion-actividades.component';
import { SeccionContactoComponent } from '../seccion-contacto/seccion-contacto.component';



@NgModule({
  declarations: [
    PaginaInicioComponent,
    SeccionPortadaComponent,
    SeccionInformacionComponent,
    SeccionActividadesComponent,
    SeccionContactoComponent,   

  ],
  imports: [
    CommonModule,
    PaginaInicioRoutingModule,
    CompartidosModule,
  ]
})
export class PaginaInicioModule { }
