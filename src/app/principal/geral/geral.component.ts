import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-geral',
  templateUrl: './geral.component.html',
  styleUrls: ['./geral.component.css']
})
export class GeralComponent implements OnInit {

  listCategorias: any;
  listAnotacoes: any;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.carregaMaterias();
    this.carregaAnotacoes();
  }

  carregaMaterias() {
    this.firestore.collection("categorias").snapshotChanges().subscribe(actionArray => {
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
