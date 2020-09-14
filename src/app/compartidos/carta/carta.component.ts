import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() imagen : string;
  @Input() texto : string;
  @Input() titulo : string;
  @Input() pie : string;
  @Input() titular : string;
  @Input() cssImagen;
  @Input() cssCarta;
  @Input() cssTitulo;
  @Input() cssTitular;



  constructor() {
    ;
   }

  ngOnInit(): void {
  }

}
