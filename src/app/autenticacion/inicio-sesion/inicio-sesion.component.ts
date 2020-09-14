import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service'
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/usuario/servicios/ConexionBD.service';
import { datosUsuarioService } from 'src/app/usuario/servicios/datos-usuario.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})

export class InicioSesionComponent {

  formulario: FormGroup;

  constructor(private servicioAutenticar: AutenticacionService, private router: Router, private constructorFormulario: FormBuilder, private servicioConexion: ConexionBDService, private servDatosUsuario: datosUsuarioService) {
    this.formulario = this.constructorFormulario.group({
      correo: new FormControl('', [Validators.required]),
      clave: new FormControl('', [Validators.required]),
    });
  }

  get correo() { return this.formulario.get('correo'); }
  get clave() { return this.formulario.get('clave'); }

  async iniciarSesion() { //CONEXION CON FIREBASE PARA INICIAR SESION. 
    const { correo, clave } = this.formulario.value; //DECLARO LAS CONSTANTES CORREO Y CLAVE Y LES ASIGNO LOS DATOS INGRESADOS EN EL FORMULARIO.
    try {
      const usuario = await this.servicioAutenticar.iniciarSesion(correo, clave); //PASO LAS CONSTANTES (CORREO|CLAVE) A LA FUNCION DE FIREBASE Y ME DEVOLVERA UN USUARIO SI CONECTO Y SE ALMACENARA EN LA CONSTANTE USUARIO.
      if (usuario && usuario.user.emailVerified) {//EVALUO SI EL USUARIO VALIDO EL CORREO DE VERIFICACION SI ES VERDADERO LO PASO A LA FUNCION QUE VALIDARA SI EL USUARIO ES NUEVO O NO.
        this.nuevoUsuario(usuario)
      }
      else if (usuario) this.router.navigate(['verificarCorreo']); //SI NO HA VERIFICADO EL CORREO LO LLEVO A LA PAGINA DE VERIFICACION DE CORREO

    } catch (error) {
      alert("ERROR EN EL INICIO DE SESION. VERIFIQUE EL CORREO Y LA CONTRASEÑA");
    }
  };

  nuevoUsuario(usuario: any) { //EVALUACION DE USUARIO NUEVO O YA REGISTRADO
    this.servicioConexion.recuperarUsuario(usuario.user.email).subscribe(datos => { //CONECTO CON LA BASE DE DATOS PARA VERIFICAR SI TENGO YA UN USUARIO CON ESE CORREO, Y ME TRAIGO TODOS SUS DATOS ALMACENADOS EN LA BD.
      var dato = Object.keys(datos).length; //SI RECIBO DE LA BD UN USUARIO CON EL CORREO LA FUNCION OBJECT ME DARA 1 POR EL ARRAY CON LOS DATOS DEL USUARIO, SINO ENCONTRO USUARIO LA FUNCION DARA 0 YA QUE NO HAY ARRAY CON DATOS.
      if (dato == 1) { //SERA VERDADERO SI HAY DATOS EN LA BD, POR LO CUAL EL USUARIO YA ESTA COMPLETAMENTE REGISTRADO.
        this.servDatosUsuario.ingrDatosPorObser(datos);//INGRESO EN EL SERVICIO LOS DATOS QUE OBTUVE DE LA BD PARA ALMACENARLOS DE MANERA LOCAL.
        this.router.navigate(['usuario'])//LO LLEVO A LA PAGINA DE USUARIOS.
      }
      else {//ES UN USUARIO NUEVO
        this.servDatosUsuario.ingresarCorreo(usuario.user.email);//INGRESO EL CORREO DEL USUARIO EN EL SERVICIO PARA ALMACENARLO DE MANERO LOCAL.
        alert("HEMOS PODIDO VALIDAR SU CORREO, AHORA VAMOS A CONTINUAR CON EL REGISTRO")
        this.router.navigate(['usuario-planillaRegistro'])//LO LLEVO A LA PLANILLA PARA QUE TERMINE SU REGISTRO.
      }
    });
  }
}
