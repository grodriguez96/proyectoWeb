import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionBDService } from '../servicios/ConexionBD.service';
import { datosUsuarioService } from '../servicios/datos-usuario.service';
import { AutenticacionService } from 'src/app/autenticacion/servicios/autenticacion.service';

@Component({
  selector: 'app-usuario-configuracion',
  templateUrl: './usuario-configuracion.component.html',
  styleUrls: ['./usuario-configuracion.component.css'],
})
export class UsuarioConfiguracionComponent {

  formulario: FormGroup;
  correo: string = this.servDatosUsuario.obtenerCorreo();

  private telefonoPatron: any = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  private generoPatron: any = /^(MASCULINO|masculino|FEMENINO|femenino)$/;
  private nacionalidadPatron: any = /^(VENEZUELA|venezuela|ARGENTINA|argentina)$/;
  private estadoCivilPatron: any = /^(CASAD[O|A]|casad[o|a]|SOLTER[O|A]|solter[o|a]|VIUD[O|A]|viud[o|a]|DIVORCIAD[O|A]|divorciad[o|a]|CONCUBIN[O|A]|concubin[o|a])$/;
  private codigoPostalPatron: any = /^[0-9]{4}$/;

  constructor(private constructorFormulario: FormBuilder, private servicioConexion: ConexionBDService, private servDatosUsuario: datosUsuarioService) {
    this.formulario = this.constructorFormulario.group({
      nombre: new FormControl(this.servDatosUsuario.obtenerNombre(), [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      segundo_nombre: new FormControl(this.servDatosUsuario.obtenerSegundoNombre(), [Validators.minLength(2), Validators.maxLength(20)]),
      apellido: new FormControl(this.servDatosUsuario.obtenerApellido(), [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      segundo_apellido: new FormControl(this.servDatosUsuario.obtenerSegundoApellido(), [Validators.minLength(2), Validators.maxLength(20)]),
      dni: new FormControl(this.servDatosUsuario.obtenerDNI(), [Validators.required, Validators.max(99999999)]),
      genero: new FormControl(this.servDatosUsuario.obtenerGenero(), [Validators.required, Validators.maxLength(9), Validators.pattern(this.generoPatron)]),
      direccion: new FormControl(this.servDatosUsuario.obtenerDireccion(), [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      codigo_postal: new FormControl(this.servDatosUsuario.obtenerCodigoPostal(), [Validators.required, Validators.pattern(this.codigoPostalPatron)]),
      fecha_nacimiento: new FormControl(this.servDatosUsuario.obtenerFechaNacimiento(), [Validators.required]),
      telefono: new FormControl(this.servDatosUsuario.obtenerTelefono(), [Validators.required, Validators.pattern(this.telefonoPatron)]),
      estado_civil: new FormControl(this.servDatosUsuario.obtenerEstadoCivil(), [Validators.required, Validators.pattern(this.estadoCivilPatron)]),
      nacionalidad: new FormControl(this.servDatosUsuario.obtenerNacionalidad(), [Validators.required, Validators.pattern(this.nacionalidadPatron)]),
      correo: new FormControl(this.correo),
    });
  }

  ngOnInit(): void {
  }

  get nombre() { return this.formulario.get('nombre'); }
  get segundo_nombre() { return this.formulario.get('segundo_nombre'); }
  get apellido() { return this.formulario.get('apellido'); }
  get segundo_apellido() { return this.formulario.get('segundo_apellido'); }
  get dni() { return this.formulario.get('dni'); }
  get genero() { return this.formulario.get('genero'); }
  get direccion() { return this.formulario.get('direccion'); }
  get codigo_postal() { return this.formulario.get('codigo_postal'); }
  get fecha_nacimiento() { return this.formulario.get('fecha_nacimiento'); }
  get telefono() { return this.formulario.get('telefono'); }
  get estado_civil() { return this.formulario.get('estado_civil'); }
  get nacionalidad() { return this.formulario.get('nacionalidad'); }

  async guardarDatos() {
    this.servicioConexion.actualizarUsuario(this.formulario.value).subscribe(estado => { //ACTUALIZA AL USUARIO EN LA BASE DE DATOS.
      if (estado) { //SI TODO SALIO BIEN EN EL FORMULARIO, DEVUELVE TRUE
        alert("USUARIO ACTUALIZADO EXITOSAMENTE")
        this.servDatosUsuario.ingrDatosPorArray(this.formulario.value) //INGRESO LOS DATOS DEL FORMULARIO EN EL SERVICIO PARA TENER LOS DATOS LOCALMENTE.

      }
    })
  }
}
