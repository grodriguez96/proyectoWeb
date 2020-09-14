import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-pagina',
  templateUrl: './preguntas-pagina.component.html',
  styleUrls: ['./preguntas-pagina.component.css']
})
export class PreguntasPaginaComponent implements OnInit {

  datosPreguntas: { pregunta: string; respuesta: string; }[];

  constructor() { 
    this.datosPreguntas = [
      {pregunta : "¿Qué es la adopción?", 
      respuesta : "Es el sistema que les permite a las niñas, niños y adolescentes tener una familia que les brinde afecto y cubra sus necesidades materiales cuando no lo puede hacer su familia de origen."},
      
      {pregunta : "¿La persona adoptada tiene derecho a conocer su origen?",
       respuesta : "Sí. El adoptado con edad y madurez suficiente tiene derecho a conocer el expediente de adopción y los datos sobre su identidad y familia de origen."},
      
       {pregunta : "¿Si soy adoptante ¿tengo que comunicarle a la persona que adopto su origen??", 
      respuesta : "Sí, en el expediente de adopción los adoptantes se comprometen a comunicar al adoptado su origen."},
     
      {pregunta : "¿Existen distintos tipos de adopción?", 
      respuesta : "Sí, la adopción puede ser plena o simple de acuerdo a lo que el juez considere más conveniente para la niña, niño o adolescente. El juez decide el tipo de vínculos que se mantienen o se extinguen respecto de la familia de origen, tanto en la adopción plena como en la simple. También existe la adopción de integración que consiste en adoptar al hijo de tu cónyuge o de tu conviviente."},
      
      {pregunta : "¿Qué personas pueden adoptar?", 
      respuesta : "Pueden adoptar: Un matrimonio. Ambos integrantes de una unión convivencial. Una única persona soltera, viuda o divorciada."},
      
      {pregunta : "Si mi pareja es del mismo sexo que yo ¿podemos adoptar?", 
      respuesta : "Sí. Los matrimonios y los convivientes del mismo sexo pueden adoptar."},
      
      {pregunta : "¿Qué requisitos debo reunir para poder adoptar?", 
      respuesta : "Para poder adoptar tenés que: Tener 25 años de edad cumplidos. Si tu cónyuge o la persona que convive con vos ya tiene más de 25 años, no hace falta que vos también tengas esa edad. Tener por lo menos 16 años más que el adoptado. Esta diferencia de edad no es necesaria cuando adoptas al hijo de tu cónyuge o conviviente. Ser argentino o naturalizado. Si sos extranjero, es necesario que residas en el país desde hace 5 años. Tenés que estar inscripto en el Registro Único de Aspirantes a Guarda con Fines Adoptivos que corresponda a tu domicilio."},
      
      {pregunta : "¿Cuándo una niña, niño o adolescente está en situación de adoptabilidad?", 
      respuesta : "Una niña, niño o adolescente está en situación de adoptabilidad cuando: No se conoce quiénes son sus padres. Sus padres fallecieron y no se encontraron familiares de origen. Los padres tomaron la decisión de que sea adoptado después de los 45 días del nacimiento. Las medidas para que vuelva con su familia de origen no dieron resultado."},
      
      {pregunta : "¿Quién decide que una niña, niño o adolescente está en situación de ser adoptabilidad?", 
      respuesta : "El juez decide si la niña, niño o adolescente está en situación de adoptabilidad."},
      
      {pregunta : "¿Puedo adoptar a una persona mayor de edad?", 
      respuesta : "Sí, solamente cuando: la persona que querés adoptar es el hijo de tu cónyuge o de la persona que convive con vos. Cuando trataste a una persona como si fuera tu hijo mientras fue menor de edad."},
      
      {pregunta : "¿Puedo adoptar a varias personas?", 
      respuesta : "Sí, podés adoptar a varias personas al mismo tiempo o en diferentes momentos."},
      
      {pregunta : "¿Puedo adoptar a mi hermano?", 
      respuesta : "No. La ley lo prohíbe."},
      
      {pregunta : "¿Puedo adoptar si ya tengo hijos?", 
      respuesta : "Sí. Tus hijos tienen derecho a ser oídos por el juez de la adopción. Todos tus hijos adoptivos y biológicos van a ser considerados hermanos entre sí."},

    ]
  }

  ngOnInit(): void {
  }

}
