import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacionService } from '../autenticacion/servicios/autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuard implements CanActivate {
  constructor(private servicioAutenticar: AutenticacionService, private router: Router) {
  }



  canActivate() {
    var usuario = this.servicioAutenticar.conexionFirebase.authState.subscribe(e => {
      if (e == null) {
        this.router.navigate(['inicio'])
        console.log("entre")
        return usuario = false
      }
    });
    return usuario = true;
  }



}
