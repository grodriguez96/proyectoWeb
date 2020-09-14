import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion-actividades',
  templateUrl: './seccion-actividades.component.html',
  styleUrls: ['./seccion-actividades.component.css']
})
export class SeccionActividadesComponent implements OnInit {
  datosActividades: { titulo: string; imagen: string; texto: string; }[];

  constructor() {
    this.datosActividades = [
      {
        titulo: "ACTIVIDADES DEPORTIVAS", imagen: "https://galmoro.com/proyectoweb/assets/img/sport-icon.png",
        texto: "El deporte, la diversión y los juegos son una forma amena de aprender valores y lecciones para toda la vida. Promueven la amistad y el juego limpio y nos aportan disciplina, respeto y habilidades necesarias para hacer de los niños, adultos comprometidos y prepararlos para hacer frente a retos futuros."
      },
      {
        titulo: "PASEOS Y SALIDAS CULTURALES", imagen: "https://galmoro.com/proyectoweb/assets/img/museum-icon.png",
        texto: "Organizamos salidas culturales y recreativas para incentivar y promover vínculos con el arte, las ciencias y actividades lúdicas que escapan a lo cotidiano para, de esta forma, favorecer la socialización de los niño/as del hogar. Eje estructurante para su formación integral."
      },
      {
        titulo: "CAMPAMENTO Y COLONIA DE VACACIONES", imagen: "https://galmoro.com/proyectoweb/assets/img/camp-icon.png",
        texto: "Promovemos estas experiencias donde los niños desarrollan aptitudes personales para la vida diaria, ganan seguridad, adquieren independencia y la sensación de pertenecer a un grupo. Favorecen su capacidad de exploración y contacto directo con la naturaleza"
      },
      {
        titulo: "ASAMBLEAS CONVIVENCIONALES", imagen: "https://galmoro.com/proyectoweb/assets/img/group-icon.png",
        texto: "Trabajamos en la escucha activa: escuchamos y somos escuchados. Promovemos la resolución de conflictos a través de la palabra, el diálogo y el respeto mutuo. Aprendemos a ser pacientes y respetar el tiempo del otro. "
      },
      {
        titulo: " ASISTENCIA TERAPEUTICA ", imagen: "https://galmoro.com/proyectoweb/assets/img/psicology-icon.png",
        texto: "Profesionales de la salud mental acompaña a los niños en su crecimiento. Este espacio es muy importante para fortalecer su autoestima y desarrollo personal y social."
      },
      {
        titulo: "CAPACITACIONES", imagen: "https://galmoro.com/proyectoweb/assets/img/training-icon.png",
        texto: "Brindamos talleres y cursos formativos destinados a voluntarios, asistentes, o profesionales que actúan en el campo de la niñez en riesgo. Buscamos mejorar la calidad de vida de los niños mediante el perfeccionamiento de las condiciones de acción y trabajo de quienes tienen la responsabilidad de asistirlos."
      },
      {
        titulo: "HUERTA ORGANICA", imagen: "https://galmoro.com/proyectoweb/assets/img/orchard-icon.png",
        texto: "Cuidamos la naturaleza, las plantas y los seres vivos mientras aprendemos a cuidarnos nosotros mismos.  Cultivamos y llevamos a la cocina nuestra producción. . Con la huerta intentamos generar hábitos alimenticios saludables, a la vez que inculcamos el trabajo en equipo, la perseverancia y la espera."
      },
      {
        titulo: "APOYO ESCOLAR", imagen: "https://galmoro.com/proyectoweb/assets/img/school-icon.png",
        texto: "La ayuda en las tareas escolares es sumamente importante para el acompañamiento de la trayectoria educativa de cada niño. La permanencia escolar aporta herramientas  de aprendizaje cognitivas y psicosociales que favorecen la formación presente y futura de cada niño y joven."
      },
      {
        titulo: "PROYECTO AGUAS", imagen: "https://galmoro.com/proyectoweb/assets/img/water-icon.png",
        texto: "Trabajamos en un proyecto de agua segura mediante un plan de mejoras para el abastecimiento, distribución y uso responsable de este recurso esencial para la vida."
      },
      {
        titulo: "TALLERES EDUCATIVOS ", imagen: "https://galmoro.com/proyectoweb/assets/img/workshop-icon.png",
        texto: "Se realizan talleres a cargo de psicólogos, psicopedagogos y trabajadoras sociales sobre distintas temáticas: sexualidad, adicciones, convivencia, derechos de niños, niñas y adolescentes."
      },
    ]
  }

  ngOnInit(): void {
  }

}
