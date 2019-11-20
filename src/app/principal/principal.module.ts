import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './principal.component';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PrincipalRoutingModule } from './principal.routing.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    
    PrincipalRoutingModule
  ],
  declarations: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
