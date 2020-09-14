import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosExpedienteService {

  private datosExpedientes = new Array();

  public cargarExpedientes(Datos: any) {


    Datos.forEach((expediente: { expediente: string; ninos_expedientes: number; descripcion: string; estado: number; }) => {
      const plantillaExpediente = {
        numeroExpediente: null,
        numeroNinos: null,
        descripcion: null,
        estado: null,
      };

      plantillaExpediente.numeroExpediente = expediente.expediente;
      plantillaExpediente.numeroNinos = expediente.ninos_expedientes;
      plantillaExpediente.descripcion = expediente.descripcion;
      plantillaExpediente.estado = expediente.estado;
      this.datosExpedientes.push(plantillaExpediente);

    });
    //console.log(this.datosExpedientes)
  }

  obtenerExpedientes(): Array<any> {
    return this.datosExpedientes;
  }

  public borrarExpedientes() {
    this.datosExpedientes = []
  }

}
