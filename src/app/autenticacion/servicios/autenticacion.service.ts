import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(public conexionFirebase: AngularFireAuth) { }

  async iniciarSesion(correo: string, clave: string): Promise<firebase.auth.UserCredential> { //FUNCION PARA INICIAR SESION EN FIREBASE.

    try {
      var usuario: Promise<firebase.auth.UserCredential>; //DECLARO LA VARIABLE DONDE GUARDARE EL USUARIO DEVUELTO POR FIREBASE.
      await this.conexionFirebase.setPersistence('none')//DECLARAR PERSISTENCIA DE LA SESION CON FIREBASE: LOCAL|SESSION|NONE .
        .then(() => {
          usuario = this.conexionFirebase.signInWithEmailAndPassword(correo, clave); //ASIGNO A LA VARIABLE USUARIO EL USUARIO DEVUELTO POR FIREBASE.
        })
      return usuario;
    } catch (error) {
      console.log(error)
    }
  };

  async registrarse(correo: string, clave: string) { //FUNCION PARA REGISTRARTE EN FIREBASE.

    try {
      const usuario = await this.conexionFirebase.createUserWithEmailAndPassword(correo, clave); //REGISTRO AL USUARIO Y GUARDO AL USUARIO DEVUELTO POR FIREBASE EN LA VARIABLE USUARIO.
      return usuario;
    } catch (error) {
      console.log(error)
    }
  };

  async cerrarSesion() { //FUNCION PARA CERRAR SESION EN FIREBASE.

    try {
      await this.conexionFirebase.signOut(); //CERRAR SESION DE LA CONEXION ACTUAL A FIREBASE.
    } catch (error) {
      console.log(error)
    }
  }

  async enviarVerificacionCorreo() { //FUNCION PARA ENVIAR CORREO DE VERIFICACION.
    (await this.conexionFirebase.currentUser).sendEmailVerification();
  }
}

