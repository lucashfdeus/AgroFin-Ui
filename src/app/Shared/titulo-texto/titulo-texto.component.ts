import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo-texto',
  templateUrl: './titulo-texto.component.html',
  styleUrls: ['./titulo-texto.component.scss']
})
export class TituloTextoComponent implements OnInit {

  @Input() tituloTexto: string =  '';
  @Input() iconClass: string =  '';
  @Input() subtitulo: string =  '';
  @Input() botaoListar = false;


  constructor(private router: Router) { }

  ngOnInit(): void  { }

  listar(): void {
    this.router.navigate([`/${this.tituloTexto.toLowerCase()}/lista`])
  }

}
