import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPlanillaRegistroComponent } from './usuario-planilla-registro.component';

const routes: Routes = [{ path: '', component: UsuarioPlanillaRegistroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioPlanillaRegistroRoutingModule { }
