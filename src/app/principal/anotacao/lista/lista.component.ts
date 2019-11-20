import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  listAnotacoes: any;
  constructor(private firestore: AngularFirestore) { 
    
  }

  ngOnInit() {
    this.carregaAnotacoes();
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
