import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrarte',
  templateUrl: './registrarte.component.html',
  styleUrls: ['./registrarte.component.css']
})
export class RegistrarteComponent {

  formulario: FormGroup;

  private clavePatron: any = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  private correoPatron: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



  constructor(private constructorFormulario: FormBuilder, private servicioAutenticar: AutenticacionService, private router: Router,) {
    this.formulario = this.constructorFormulario.group({
      correo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.correoPatron)]),
      clave: new FormControl('', [Validators.required, Validators.pattern(this.clavePatron), Validators.minLength(8)]),
    });
  }

  get correo() { return this.formulario.get('correo'); }
  get clave() { return this.formulario.get('clave'); }


  async Registrarse() { //CONEXION CON FIREBASE PARA REGISTRASE.
    const { correo, clave } = this.formulario.value; //DECLARO LAS CONSTANTES CORREO Y CLAVE Y LES ASIGNO LOS DATOS INGRESADOS EN EL FORMULARIO.
    try {
      const usuario = await this.servicioAutenticar.registrarse(correo, clave); //PASO LAS CONSTANTES (CORREO|CLAVE) A LA FUNCION DE FIREBASE Y ME DEVOLVERA UN USUARIO, SE ALMACENARA EN LA CONSTANTE USUARIO.
      if (usuario) { //EVALUO SI PUDO CREAR EL USUARIO DEL REGISTRO ANTERIOR.
        this.servicioAutenticar.enviarVerificacionCorreo(); //ENVIO MEDIANTE LA FUNCION DE FIREBASE EL CORREO DE VERIFICACION.
        this.router.navigate(['verificarCorreo']);//LO LLEVO A LA PAGINA DE VERIFICACION.

      }
    } catch (error) {
      console.log(error);
    }
  }


}



