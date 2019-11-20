import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore'; 

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppRoutingModule } from './app.routing.module';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
