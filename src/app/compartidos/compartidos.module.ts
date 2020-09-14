import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeparadorComponent } from './separador/separador.component';
import { CartaComponent } from './carta/carta.component';




@NgModule({
  declarations: [
    SeparadorComponent,
    CartaComponent,

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SeparadorComponent, 
    CartaComponent,
  ],
})
export class CompartidosModule { }
