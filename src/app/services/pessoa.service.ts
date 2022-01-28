import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../Models/Pessoa';


@Injectable()
export class PessoaService {

  baseUrl = 'https://localhost:5001/pessoa';

constructor(private http: HttpClient) { }

public getPessoas(): Observable<Pessoa[]> {
  return this.http.get<Pessoa[]>(this.baseUrl)
}

public getPessoasByNome(nome: string): Observable<Pessoa[]> {
  return this.http.get<Pessoa[]>(`${this.baseUrl}/${nome}/nome`)
}

public getPessoaById(id: number): Observable<Pessoa> {
  return this.http.get<Pessoa>(`${this.baseUrl}/${id}`)
}

}
