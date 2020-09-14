import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaColaboracionComponent } from './pagina-colaboracion.component';

const routes: Routes = [{ path: '', component: PaginaColaboracionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaColaboracionRoutingModule { }
