import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaUsuarioRoutingModule } from './pagina-usuario-routing.module';
import { PaginaUsuarioComponent } from './pagina-usuario.component';
import { UsuarioInicioComponent } from '../usuario-inicio/usuario-inicio.component';
import { UsuarioPerfilComponent } from '../usuario-perfil/usuario-perfil.component';
import { UsuarioComunicadosComponent } from '../usuario-comunicados/usuario-comunicados.component';
import { ComunicadoComponent } from '../usuario-comunicados/comunicado/comunicado.component';
import { UsuarioConfiguracionComponent } from '../usuario-configuracion/usuario-configuracion.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PaginaUsuarioComponent,
    UsuarioInicioComponent,
    UsuarioPerfilComponent,
    UsuarioComunicadosComponent,
    ComunicadoComponent,
    UsuarioConfiguracionComponent,
  ],
  imports: [
    CommonModule,
    PaginaUsuarioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PaginaUsuarioModule {}
