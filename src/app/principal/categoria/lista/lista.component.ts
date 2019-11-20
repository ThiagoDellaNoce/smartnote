import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  list: any;
  user: any;
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
  }

  // onEdit(emp: Employee) {
  //   this.service.formData = Object.assign({}, emp);
  // }

  // onDelete(id: string) {
  //   if (confirm("Are you sure to delete this record?")) {
  //     this.firestore.doc('employees/' + id).delete();
  //     this.toastr.warning('Deleted successfully','EMP. Register');
  //   }
  // }

}