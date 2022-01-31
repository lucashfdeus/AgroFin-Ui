import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Pessoa } from './../../../Models/Pessoa';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '@app/services/pessoa.service';

@Component({
  selector: 'app-pessoas-detalhes',
  templateUrl: './pessoas-detalhes.component.html',
  styleUrls: ['./pessoas-detalhes.component.scss']
})
export class PessoasDetalhesComponent implements OnInit {

  pessoa = {} as Pessoa;
  form: FormGroup; //strict=false, desabilitar a obrigação do inicializador de variáveis.
  estadoSalvar = 'post';

  get f(): any {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private pessoaService: PessoaService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
    ) { }

    public carregarPessoa(): void {
      const pessoaIdParam = this.router.snapshot.paramMap.get('id');
      if(pessoaIdParam != null){
        this.spinner.show();

        this.estadoSalvar = 'put';

        this.pessoaService.getPessoaById(+pessoaIdParam).subscribe({
          //O +pessoaIdParam é para converter o id string para number.

          next: (pessoa: Pessoa) => {
            this.pessoa = {...pessoa}
            this.form.patchValue(this.pessoa);
          },
          error: (error: any) => {
            this.spinner.hide();
            this.toastr.error('Erro ao tentar carregar Pessoa.', 'Erro');
            console.log(this.pessoa);
          },
          complete: () => this.spinner.hide(),

        })
      }
    }

    ngOnInit(): void {
      this.carregarPessoa();
      this.validation();
    }

    public validation(): void {
      this.form = this.fb.group({
        pessoa_Nome: ['',[Validators.required, Validators.minLength(4), Validators.maxLength(120)]],
        pessoa_Numero_Identificador: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      })
    }

    public  resetForm(): void {
      this.form.reset();
    }

    public salvarAlteracao(): void {
      this.spinner.show();
      if(this.form.valid) {

        this.pessoa = (this.estadoSalvar == 'post')
        ? {...this.form.value} //os ... é para copiar todos valores do obg.
        : {id: this.pessoa.pessoa_Id, ...this.form.value};  //os ... é para copiar todos valores do obg.

        this.pessoaService[this.estadoSalvar](this.pessoa).subscribe(

          () => this.toastr.success('Pessoa salva com Sucesso!', 'Sucesso'),
          (error: any) => {
            console.error(error);
            this.spinner.hide();
            this.toastr.error('Erro ao tentar salvar Pessoa.', 'Erro');
          },
          () => this.spinner.hide(),
        );

      }

    }

}
