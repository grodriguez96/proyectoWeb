import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-separador',
  templateUrl: './separador.component.html',
  styleUrls: ['./separador.component.css']
})
export class SeparadorComponent implements OnInit {
  
  @Input() texto1 : string;
  @Input() textoColor : string;
  @Input() texto2 : string;
  constructor() { }

  ngOnInit(): void {
  }

}
