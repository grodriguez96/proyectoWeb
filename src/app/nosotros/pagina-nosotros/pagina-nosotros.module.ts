import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompartidosModule} from '../../compartidos/compartidos.module'

import { PaginaNosotrosRoutingModule } from './pagina-nosotros-routing.module';
import { PaginaNosotrosComponent } from './pagina-nosotros.component';




@NgModule({
  declarations: [
    PaginaNosotrosComponent,
  ],
  imports: [
    CommonModule,
    PaginaNosotrosRoutingModule,
    CompartidosModule,
  ]
})
export class PaginaNosotrosModule { }
