
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Pessoa } from '@app/Models/Pessoa';
import { PessoaService } from '@app/services/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.scss']
})
export class PessoasComponent implements OnInit {

  modalRef?: BsModalRef;

  public pessoas: Pessoa[] = [];

  public pessoasFiltradas: Pessoa[] = [];
  private filtroListado = '';


  constructor(
    private pessoaService: PessoaService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.spinner.show();
    this.getPessoas();
  }

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(value: string) {
    this.filtroListado = value;
    this.pessoasFiltradas = this.filtroLista ? this.filtrarPessoas(this.filtroLista) : this.pessoas;
  }

  public filtrarPessoas(filtrarPor: string): Pessoa[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();

    return this.pessoas.filter(
      (pessoa: {pessoa_Nome: string; pessoa_Numero_Identificador: string }) => pessoa.pessoa_Nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        pessoa.pessoa_Numero_Identificador.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }


  public getPessoas(): void {
    this.pessoaService.getPessoas().subscribe({
      next: (pessoas: Pessoa[]) => {
        this.pessoas = pessoas;
        this.pessoasFiltradas = this.pessoas;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar página!', 'Erro');
      },
      complete: () => this.spinner.hide()
    })


  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {

    this.modalRef?.hide();
    this.toastr.success('Excluído com sucesso!', 'Excluído');
  }

  decline(): void {

    this.modalRef?.hide();
  }


}

