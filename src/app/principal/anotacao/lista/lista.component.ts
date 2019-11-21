import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  user;
  listAnotacoes: any;

  constructor(private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      this.user = this.afAuth.auth.currentUser;

  }

  ngOnInit() {
    this.carregaAnotacoes();
  }

  carregaAnotacoes() {
    this.db.list('anotacoes/users/' + this.user.uid + "/").valueChanges().subscribe(item => {
      this.listAnotacoes = item;
    });
  }
}
