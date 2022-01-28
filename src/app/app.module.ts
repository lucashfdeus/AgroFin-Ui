import { TituloTextoComponent } from './Shared/titulo-texto/titulo-texto.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { PessoaService } from './services/pessoa.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './components/pessoas/pessoas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './Shared/nav/nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PessoasListaComponent } from './components/pessoas/pessoas-lista/pessoas-lista.component';
import { PessoasDetalhesComponent } from './components/pessoas/pessoas-detalhes/pessoas-detalhes.component';


@NgModule({
  declarations: [
    AppComponent,
      PessoasComponent,
      NavComponent,
      TitulosComponent,
      TituloTextoComponent,
      PessoasListaComponent,
      PessoasDetalhesComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ModalModule.forRoot(),
    ToastNoAnimationModule.forRoot(),
    NgxSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    CommonModule,
  ],
  providers: [PessoaService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
