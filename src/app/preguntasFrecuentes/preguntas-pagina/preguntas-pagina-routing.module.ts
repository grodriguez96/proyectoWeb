import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreguntasPaginaComponent } from './preguntas-pagina.component';

const routes: Routes = [{ path: '', component: PreguntasPaginaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreguntasPaginaRoutingModule { }
