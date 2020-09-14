import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInicioComponent } from './pagina-inicio.component';

const routes: Routes = [{ path: '', component: PaginaInicioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaInicioRoutingModule { }
