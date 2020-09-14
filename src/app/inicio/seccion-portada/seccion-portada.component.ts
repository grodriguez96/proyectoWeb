import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seccion-portada',
  templateUrl: './seccion-portada.component.html',
  styleUrls: ['./seccion-portada.component.css']
})
export class SeccionPortadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ruta() {
    this.router.navigate(['inicioSesion']);
  }

}
