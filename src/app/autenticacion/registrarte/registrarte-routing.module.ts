import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarteComponent } from './registrarte.component';

const routes: Routes = [{ path: '', component: RegistrarteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrarteRoutingModule { }
