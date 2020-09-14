import { Component, OnInit } from '@angular/core';
import { datosUsuarioService } from '../servicios/datos-usuario.service';

@Component({
  selector: 'app-usuario-inicio',
  templateUrl: './usuario-inicio.component.html',
  styleUrls: ['./usuario-inicio.component.css']
})
export class UsuarioInicioComponent implements OnInit {

  nombre: string;
  apellido: string;

  constructor(private servDatosUsuario: datosUsuarioService) {
    this.nombre = this.servDatosUsuario.obtenerNombre();
    this.apellido = this.servDatosUsuario.obtenerApellido();
  }

  ngOnInit(): void {
  }


}
