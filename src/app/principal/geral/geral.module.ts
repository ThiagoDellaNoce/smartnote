import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeralComponent } from './geral.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { GeralRoutingModule } from './geral.routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
    GeralRoutingModule
  ],
  declarations: [
    GeralComponent
  ]
})
export class GeralModule { }
