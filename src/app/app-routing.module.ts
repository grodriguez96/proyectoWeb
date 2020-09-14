import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionGuard } from '../app/guards/autenticacion.guard'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/pagina-inicio/pagina-inicio.module').then(m => m.PaginaInicioModule)
  },

  {
    path: 'nosotros',
    loadChildren: () => import('./nosotros/pagina-nosotros/pagina-nosotros.module').then(m => m.PaginaNosotrosModule)
  },

  {
    path: 'colaboracion',
    loadChildren: () => import('./colaboracion/pagina-colaboracion/pagina-colaboracion.module').then(m => m.PaginaColaboracionModule)
  },

  {
    path: 'preguntas',
    loadChildren: () => import('./preguntasFrecuentes/preguntas-pagina/preguntas-pagina.module').then(m => m.PreguntasPaginaModule)
  },

  {
    path: 'inicioSesion',
    loadChildren: () => import('./autenticacion/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionModule)
  }
  ,

  {
    path: 'registrarte',
    loadChildren: () => import('./autenticacion/registrarte/registrarte.module').then(m => m.RegistrarteModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/pagina-usuario/pagina-usuario.module').then(m => m.PaginaUsuarioModule),
    canActivate: [AutenticacionGuard]
  },

  {
    path: 'verificarCorreo',
    loadChildren: () => import('./autenticacion/verificar-correo/verificar-correo.module').then(m => m.VerificarCorreoModule),
  },
  {
    path: 'usuario-planillaRegistro',
    loadChildren: () => import('./usuario/usuario-planilla-registro/usuario-planilla-registro.module').then(m => m.UsuarioPlanillaRegistroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
