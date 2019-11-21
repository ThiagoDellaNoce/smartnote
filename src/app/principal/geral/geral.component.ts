import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  listCategorias: any;
  listAnotacoes: any;
  user: any;

  constructor(private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
      this.user = this.afAuth.auth.currentUser;
    }

  ngOnInit() {
    this.carregaMaterias();
    this.carregaAnotacoes();
  }

  carregaMaterias() {
        //database
    this.db.list('categorias/users/' + this.user.uid + "/").valueChanges().subscribe(item => {
      this.listCategorias = item;
    });
  }

  carregaAnotacoes() {
        //database
    this.db.list('anotacoes/users/' + this.user.uid + "/").valueChanges().subscribe(item => {
      this.listAnotacoes = item;
    });
  }


}
