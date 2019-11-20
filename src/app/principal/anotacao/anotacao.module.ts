import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AnotacaoComponent } from './anotacao.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';

import { AnotacaoRoutingModule } from './anotacao.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
    AnotacaoRoutingModule
  ],
  declarations: [
    AnotacaoComponent, 
    ListaComponent, 
    AddComponent
  ]
})
export class AnotacaoModule { }