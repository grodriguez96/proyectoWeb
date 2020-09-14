import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

  url = 'https://galmoro.com/proyectoweb/php/'//'https://galmoro.com/';

  constructor(private http: HttpClient) { }

  recuperarExpedientes() {//DEVUELVE TODOS LOS EXPEDIENTES DE LA BD.
    return this.http.get(`${this.url}devolverExpedientes.php`);
  }

  recuperarUsuario(correo: string) {//DEVUELVE UN USUARIO DE LA BD.
    return this.http.get(`${this.url}devolverUsuario.php?correo=${correo}`);
  }

  crearUsuario(datos: Array<string>) { //CREA UN NUEVO USUARO EN LA BD.
    return this.http.post(`${this.url}crearUsuario.php`, JSON.stringify(datos));
  }

  actualizarUsuario(datos: Array<string>) { //CREA UN NUEVO USUARO EN LA BD.
    return this.http.post(`${this.url}actualizarUsuario.php`, JSON.stringify(datos));
  }

  asignarExpediente(datos: Array<string>) { //ASIGNA UN EXPEDIENTE A UN USUARIO EN LA BD.
    return this.http.post(`${this.url}asignarExpediente.php`, JSON.stringify(datos));
  }


}
