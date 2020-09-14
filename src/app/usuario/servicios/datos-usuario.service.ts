import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class datosUsuarioService {

  private datosUsuario = {
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
  }

  constructor() { }

  obtenerDatosUsuario(): {
    nombre: string,
    segundoNombre: string,
    apellido: string,
    segundoApellido: string,
    genero: string,
    dni: number,
    correoElectronico: string,
    telefono: string,
    fechaNacimiento: string,
    nacionalidad: string,
    estadoCivil: string,
    direccion: string,
    codigoPostal: number,
    numExpedienteNino: string,
  } {
    return this.datosUsuario;
  }

  ingresarCorreo(correo: string) {
    this.datosUsuario.correoElectronico = correo
  }

  obtenerCorreo(): string {
    return this.datosUsuario.correoElectronico;
  }
  obtenerNombre(): string {
    return this.datosUsuario.nombre;
  }
  obtenerApellido(): string {
    return this.datosUsuario.apellido;
  }
  obtenerSegundoApellido(): string {
    return this.datosUsuario.segundoApellido;
  }
  obtenerSegundoNombre(): string {
    return this.datosUsuario.segundoNombre;
  }
  obtenerNumeroExpediente(): string {
    return this.datosUsuario.numExpedienteNino;
  }
  obtenerDNI(): string {
    return this.datosUsuario.dni;
  }
  obtenerDireccion(): string {
    return this.datosUsuario.direccion;
  }
  obtenerTelefono(): string {
    return this.datosUsuario.telefono;
  }
  obtenerNacionalidad(): string {
    return this.datosUsuario.nacionalidad;
  }
  obtenerCodigoPostal(): string {
    return this.datosUsuario.codigoPostal;
  }
  obtenerEstadoCivil(): string {
    return this.datosUsuario.estadoCivil;
  }
  obtenerGenero(): string {
    return this.datosUsuario.genero;
  }
  obtenerFechaNacimiento(): string {
    return this.datosUsuario.fechaNacimiento;
  }



  ingrDatosPorObser(Datos: any) {
    Datos.forEach(
      (Usuario: { nombre: string; segundo_nombre: string; apellido: string; segundo_apellido: string; genero: string; nacionalidad: string; fecha_nacimiento: string; dni: number; estado_civil: string; telefono: string; codigo_postal: number; direccion: string; correo: string; num_expediente_niño: string }) => {
        this.datosUsuario.nombre = Usuario.nombre;
        this.datosUsuario.segundoNombre = Usuario.segundo_nombre;
        this.datosUsuario.apellido = Usuario.apellido;
        this.datosUsuario.segundoApellido = Usuario.segundo_apellido;
        this.datosUsuario.genero = Usuario.genero;
        this.datosUsuario.nacionalidad = Usuario.nacionalidad;
        this.datosUsuario.fechaNacimiento = Usuario.fecha_nacimiento;
        this.datosUsuario.dni = Usuario.dni;
        this.datosUsuario.estadoCivil = Usuario.estado_civil;
        this.datosUsuario.telefono = Usuario.telefono;
        this.datosUsuario.codigoPostal = Usuario.codigo_postal;
        this.datosUsuario.direccion = Usuario.direccion;
        this.datosUsuario.correoElectronico = Usuario.correo;
        this.datosUsuario.numExpedienteNino = Usuario.num_expediente_niño;
      });
  }

  ingrDatosPorArray(Datos: any) {
    this.datosUsuario.nombre = Datos.nombre;
    this.datosUsuario.segundoNombre = Datos.segundo_nombre;
    this.datosUsuario.apellido = Datos.apellido;
    this.datosUsuario.segundoApellido = Datos.segundo_apellido;
    this.datosUsuario.genero = Datos.genero;
    this.datosUsuario.nacionalidad = Datos.nacionalidad;
    this.datosUsuario.fechaNacimiento = Datos.fecha_nacimiento;
    this.datosUsuario.dni = Datos.dni;
    this.datosUsuario.estadoCivil = Datos.estado_civil;
    this.datosUsuario.telefono = Datos.telefono;
    this.datosUsuario.codigoPostal = Datos.codigo_postal;
    this.datosUsuario.direccion = Datos.direccion;
    this.datosUsuario.correoElectronico = Datos.correo;
  }
}
