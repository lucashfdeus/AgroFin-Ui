import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  public pessoas: any = [];

  public pessoasFiltradas: any = [];
  private _filtroLista = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPessoas();
  }

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.pessoasFiltradas = this.filtroLista ? this.filtrarPessoas(this.filtroLista) : this.pessoas;
  }

  filtrarPessoas(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return this.pessoas.filter(
      (pessoa: {pessoa_Nome: string; pessoa_Numero_Identificador: string }) => pessoa.pessoa_Nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        pessoa.pessoa_Numero_Identificador.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }



  public getPessoas(): void {
    this.http.get('https://localhost:5001/pessoa').subscribe(
      response => {
        this.pessoas = response,
          this.pessoasFiltradas = this.pessoas;
      },
      error => console.log(error)
    );

  }

}
