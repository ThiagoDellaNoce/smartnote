import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

declare var $: any;
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: any;
  list: any;

  constructor(
    private firestore: AngularFirestore,
    public afAuth: AngularFireAuth) {
    this.user = this.afAuth.auth.currentUser;
  }

  ngOnInit() {
    
    this.firestore.collection("categorias").doc("users").collection(this.user.uid).snapshotChanges().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as any;
      })
    });
    
    // $('select').material_select();

  }

}
