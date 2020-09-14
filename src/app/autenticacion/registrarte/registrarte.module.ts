import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarteRoutingModule } from './registrarte-routing.module';
import { RegistrarteComponent } from './registrarte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrarteComponent],
  imports: [
    CommonModule,
    RegistrarteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class RegistrarteModule { }
