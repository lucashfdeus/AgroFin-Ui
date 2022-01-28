import { Endereco } from "./Endereco";

export interface Pessoa {

  pessoa_Id: number;
  pessoa_Numero_Identificador: string;
  pessoa_Nome: string;
  enderecos: Endereco[];
}


