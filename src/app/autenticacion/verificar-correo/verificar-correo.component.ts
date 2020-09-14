import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { User } from 'firebase';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent {

  public usuario$: Observable<User> = this.servicioAutenticar.conexionFirebase.user;

  constructor(private servicioAutenticar: AutenticacionService) { }

  enviarCorreoVerificacion() { //CONEXION CON FIREBASE PARA ENVIAR CORREO DE VERIFICACION.
    this.servicioAutenticar.enviarVerificacionCorreo();
  }

}
