import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaNosotrosComponent } from './pagina-nosotros.component';

const routes: Routes = [{ path: '', component: PaginaNosotrosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaNosotrosRoutingModule { }
