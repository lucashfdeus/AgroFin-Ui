import { PessoasComponent } from './components/pessoas/pessoas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulosComponent } from './components/titulos/titulos.component';
import { PessoasDetalhesComponent } from './components/pessoas/pessoas-detalhes/pessoas-detalhes.component';
import { PessoasListaComponent } from './components/pessoas/pessoas-lista/pessoas-lista.component';

const routes: Routes = [
  {path: 'pessoas', redirectTo: 'pessoas/lista'},
  {
    path: 'pessoas', component: PessoasComponent,
    children: [
        {path: 'detalhe/:id', component: PessoasDetalhesComponent},
        {path: 'detalhe', component: PessoasDetalhesComponent },
        {path: 'lista', component: PessoasListaComponent},
    ]
  },
  {path: 'titulos', component: TitulosComponent},
  {path: '', redirectTo: 'titulos', pathMatch: 'full'},
  {path: '**', redirectTo: 'titulos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
