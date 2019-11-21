import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  list: any;
  user: any;

  items: any;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) {
    this.user = this.afAuth.auth.currentUser;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
      //database
      this.db.list('categorias/users/' + this.user.uid + "/").valueChanges().subscribe(item => {
        this.items = item;
      });
  }

}
