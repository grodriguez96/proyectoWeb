import { Component, OnInit } from '@angular/core';
import { datosUsuarioService } from '../servicios/datos-usuario.service';

@Component({
  selector: 'app-usuario-perfil',
  templateUrl: './usuario-perfil.component.html',
  styleUrls: ['./usuario-perfil.component.css']
})
export class UsuarioPerfilComponent {

  datosUsuario = {
    nombre: null,
    segundoNombre: null,
    apellido: null,
    segundoApellido: null,
    genero: null,
    dni: null,
    correoElectronico: null,
    telefono: null,
    fechaNacimiento: null,
    nacionalidad: null,
    estadoCivil: null,
    direccion: null,
    codigoPostal: null,
    numExpedienteNino: null,
  };

  constructor(private servDatosUsuario: datosUsuarioService) {

    this.devolverUsuario();
  }

  devolverUsuario() {
    this.datosUsuario = this.servDatosUsuario.obtenerDatosUsuario();
  }
}
