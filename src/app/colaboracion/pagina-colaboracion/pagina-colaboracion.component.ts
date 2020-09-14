import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-colaboracion',
  templateUrl: './pagina-colaboracion.component.html',
  styleUrls: ['./pagina-colaboracion.component.css']
})
export class PaginaColaboracionComponent implements OnInit {
  datosColaboracion: { titulo: string; imagen: string; descripcion: string; }[];

  constructor() {
    this.datosColaboracion = [
      {
        titulo: "MATERIALMENTE", imagen: "https://galmoro.com/proyectoweb/assets/img/charity-icon.png",
        descripcion: "Podes hacercanos llegar ropa, juguetes y materiales escolares que se encuentren en buen estado. Ademas tambien puedes traer alimentos no perecederos."
      },
      {
        titulo: "VOLUNTARIOS", imagen: "https://galmoro.com/proyectoweb/assets/img/volunteer-icon.png",
        descripcion: "Podes optar en nuestra casa para ser voluntario y ayudar en  el desarrollo de las actividades con los niños, niñas y adolescentes."
      },
      {
        titulo: "MONETARIAMENTE", imagen: "https://galmoro.com/proyectoweb/assets/img/money-icon.png",
        descripcion: "Podes hacernos llegar por medio de depositos o transferencias bancarias una ayuda monetaria para poder costear los gastos del hogar."
      },
    ]
  }
  ngOnInit(): void {
  }

}
