import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CategoriaComponent } from './categoria.component';
import { ListaComponent } from './lista/lista.component';
import { AddComponent } from './add/add.component';

import { CategoriaRoutingModule } from './categoria.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
    CategoriaRoutingModule
  ],
  declarations: [
    CategoriaComponent, 
    ListaComponent, 
    AddComponent
  ]
})

export class CategoriaModule { }