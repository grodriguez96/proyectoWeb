import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarCorreoComponent } from './verificar-correo.component';

const routes: Routes = [{ path: '', component: VerificarCorreoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificarCorreoRoutingModule { }
