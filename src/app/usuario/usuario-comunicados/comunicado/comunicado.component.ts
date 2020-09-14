import { Component, Input, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConexionBDService } from '../../servicios/ConexionBD.service';
import { datosUsuarioService } from '../../servicios/datos-usuario.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DatosExpedienteService } from '../../servicios/datos-expediente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comunicado',
  templateUrl: './comunicado.component.html',
  styleUrls: ['./comunicado.component.css']
})
export class ComunicadoComponent {

  referModal: BsModalRef;
  constructor(private constructorFormulario: FormBuilder, private servicioModal: BsModalService, private servicioConexion: ConexionBDService, private servDatosUsuario: datosUsuarioService, private servDatosExpedientes: DatosExpedienteService, private router: Router) {
  }


  @Input() numExpediente: string;
  @Input() numNinos: number;
  @Input() descripcion: string;
  @Input() estado: string;
  @Input() cssFondo: string;
  @Input() boton: number;
  @Input() mensaje: string;

  abrirModal(plantilla: TemplateRef<any>) {
    this.referModal = this.servicioModal.show(plantilla);
  }

  confirmar(): void {
    var expediente = this.servDatosUsuario.obtenerNumeroExpediente();

    if (expediente == null) {
      var correo = this.servDatosUsuario.obtenerCorreo();
      var formulario: FormGroup = this.constructorFormulario.group({
        correo: new FormControl(correo),
        numeroExpediente: new FormControl(this.numExpediente),
      })
      const estado = this.servicioConexion.asignarExpediente(formulario.value)
      estado.subscribe(estado => {
        if (estado) { //SI TODO SALIO BIEN EN EL FORMULARIO, DEVUELVE TRUE
          alert("EXPEDIENTE ASIGNADO EXITOSAMENTE, MANTENGA SUS DATOS ACTUALIZADOS PARA PODER COMUNICARNOS CON USTED EN LOS PROXIMOS DIAS");

          this.servicioConexion.recuperarUsuario(this.servDatosUsuario.obtenerCorreo()).subscribe(datos => { this.servDatosUsuario.ingrDatosPorObser(datos); })
          this.servDatosExpedientes.borrarExpedientes();
          this.servicioConexion.recuperarExpedientes().subscribe(expedientes => this.servDatosExpedientes.cargarExpedientes(expedientes));
          this.referModal.hide();
          this.router.navigate(['usuario']);
        }
        else alert("OCURRIO UN ERROR EN LA ASIGNACION DEL EXPEDIENTE");
      })
    } else alert("YA TIENE UN EXPEDIENTE EN PROCESO")
  }
  declinar(): void {
    this.referModal.hide();
  }

}
