import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-pagina-usuario',
  templateUrl: './pagina-usuario.component.html',
  styleUrls: ['./pagina-usuario.component.css'],
})
export class PaginaUsuarioComponent implements OnInit {

  scrWidth: any;

  @HostListener('window:resize', ['$event'])

  getScreenSize(event?) {
    this.scrWidth = window.innerWidth;

  }

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void { }
}
