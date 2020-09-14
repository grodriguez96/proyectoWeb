import { Component } from '@angular/core';
import { ConexionBDService } from '../servicios/ConexionBD.service'
import { DatosExpedienteService } from '../servicios/datos-expediente.service'
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-usuario-comunicados',
  templateUrl: './usuario-comunicados.component.html',
  styleUrls: ['./usuario-comunicados.component.css']
})
export class UsuarioComunicadosComponent {

  Expedientes = new Array();

  constructor(private servicioConexion: ConexionBDService, private servDatosExpedientes: DatosExpedienteService) {
    this.devolverExpedientes();
  }

  devolverExpedientes() {//DEVUELVE LOS EXPEDIENTES DE LA BD Y LOS ASIGNO A LA VARIABLE EXPEDIENTES.
    this.servicioConexion.recuperarExpedientes().subscribe(expedientes => this.servDatosExpedientes.cargarExpedientes(expedientes));
    this.actualizarExpedientes();
  }
  actualizarExpedientes() {
    this.Expedientes = this.servDatosExpedientes.obtenerExpedientes();
  }
}
