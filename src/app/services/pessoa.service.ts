import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';
import { Pessoa } from '../Models/Pessoa';


@Injectable()
export class PessoaService {

  baseUrl = 'https://localhost:5001/pessoa';

constructor(private http: HttpClient) { }

public getPessoas(): Observable<Pessoa[]> {
  return this.http
    .get<Pessoa[]>(this.baseUrl)
    .pipe(take(1));
}

public getPessoasByNome(nome: string): Observable<Pessoa[]> {
  return this.http
    .get<Pessoa[]>(`${this.baseUrl}/${nome}/nome`)
    .pipe(take(1));
}

public getPessoaById(id: number): Observable<Pessoa> {
  return this.http
    .get<Pessoa>(`${this.baseUrl}/${id}`)
    .pipe(take(1));
}

public post(pessoa: Pessoa): Observable<Pessoa> {
  return this.http
    .post<Pessoa>(this.baseUrl, pessoa)
    .pipe(take(1));
}

public put(pessoa: Pessoa): Observable<Pessoa> {
  return this.http
    .put<Pessoa>(`${this.baseUrl}/${pessoa.pessoa_Id}`, pessoa)
    .pipe(take(1));
}

public deletePessoa(id: number): Observable<any> {
  return this.http
    .delete(`${this.baseUrl}/${id}`)
    .pipe(take(1));
}

}
