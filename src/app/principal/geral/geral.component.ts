import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  listCategorias: any;
  listAnotacoes: any;
  user: any;
  constructor(private firestore: AngularFirestore,
    public afAuth: AngularFireAuth) { 
      this.user = this.afAuth.auth.currentUser;
    }

  ngOnInit() {
    this.carregaMaterias();
    this.carregaAnotacoes();
  }

  carregaMaterias() {
    this.firestore.collection("categorias").doc("users").collection(this.user.uid).snapshotChanges().subscribe(actionArray => {
      this.listCategorias = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      })
    });
  }

  carregaAnotacoes() {
    this.firestore.collection("anotacoes").snapshotChanges().subscribe(actionArray => {
      this.listAnotacoes = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      })
    });
  }


}
