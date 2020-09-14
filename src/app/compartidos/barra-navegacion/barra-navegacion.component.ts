import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AutenticacionService } from 'src/app/autenticacion/servicios/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent {

  public usuario$: Observable<User> = this.servicioAutenticar.conexionFirebase.user;
  imagen = "https://galmoro.com/proyectoweb/assets/img/logo.png";
  titulo = "Hogar Jesus Amigo"

  constructor(public servicioAutenticar: AutenticacionService, private router: Router) { }

  async cerrarSesion() {//CONEXION CON FIREBASE PARA CERRAR SESION.
    try {
      await this.servicioAutenticar.cerrarSesion();
      this.router.navigate(['inicio']);
    } catch (error) {
      console.log(error);
    }
  }

}
