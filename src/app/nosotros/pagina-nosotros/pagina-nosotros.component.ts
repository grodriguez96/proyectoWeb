import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-nosotros',
  templateUrl: './pagina-nosotros.component.html',
  styleUrls: ['./pagina-nosotros.component.css']
})
export class PaginaNosotrosComponent implements OnInit {

  datosEmpleados: { nombre: string; imagen: string; biografia: string; cargo: string; }[];

  constructor() {
    this.datosEmpleados = [
      { nombre: "Patricia Pérez", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Lic. en Trabajo Social, Directora de Soles. Miembro activo de Hogares en Red de CABA. Con responsabilidad y trabajo en equipo lleva adelante este compromiso de vida con los niñ@s y adolescentes en situación de vulnerabilidad social.", cargo: "Vocal" },
      { nombre: "Laura Retamar", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Prof. de Educación Inical. Tec. en Minoridad y Familia. Lic. en Trabajo Social. Coordinadora del Hogar. Desarrolla en equipo la tarea diaria de acompañamiento con amor, responsabilidad y compromiso.", cargo: "Secretaria" },
      { nombre: "María Marta Villalba", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Lic. en Psicología y Prof. de Nivel Medio y Superior.Socia fundadora de Soles. Desde el 2001 comprometida con la misión del Hogar acompañando a los niñ@s en su crecimiento y a los adultos en su trabajo cotidiano", cargo: "Presidenta" },
      { nombre: "Graciela Algacibiur", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Lic. en Relaciones Internacionales. Llegó al hogar en el 2008 para realizar tareas voluntarias. Desde ese momento acompaña a los niñ@s en las actividades de la huerta.Trabaja en el sector público. ", cargo: "Revisora de Cuentas" },
      { nombre: "M. Emilia Sesin", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Abogada. Inició su tarea en el Hogar como voluntaria y hoy es miembro de la Asociación. Acompaña a los niños en diversas actividades recreativas. Trabaja en el sector público.", cargo: "Revisora de Cuentas" },
      { nombre: "Susana Machado", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Lic. en Psicología. Social. Fundadora de la Asociación. Se suma al trabajo del hogar como profesional acompañando a los niñ@s y adolescentes en su crecimiento.", cargo: "Tesorera" },
      { nombre: "Susana Rótolo", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Maestra Nacional. Socia fundadora de la Asociación. Miembro del equipo del Hogar. Inició su recorrido de forma voluntaria en 2003 brindando apoyo escolar con dedicación y mucho amor.", cargo: "Vocal" },
      { nombre: "Rosa Morocoima", imagen: "https://galmoro.com/proyectoweb/assets/img/employee-img.jpg", biografia: "Prof. de Educación Inical. Tec. en Minoridad y Familia. Lic. en Trabajo Social. Coordinadora del Hogar. Desarrolla en equipo la tarea diaria de acompañamiento con amor, responsabilidad y compromiso.", cargo: "Voluntaria" },

    ];
  }

  ngOnInit(): void {
  }

}
