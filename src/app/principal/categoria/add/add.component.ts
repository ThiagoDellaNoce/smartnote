import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user;

  constructor(private firestore: AngularFirestore,
    private router: Router,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.user = this.afAuth.auth.currentUser;
  }

  onSubmit() {
    let categoriaData = {
      nome: $("#nome").val(),
      professor: $("#professor").val()
    };

    // this.firestore.collection("categorias/" + this.user.uid + "/").add(categoria)
    //   .then(item => {
    //     this.router.navigate(['/principal/categoria/lista']);
    //   });
    this.firestore.collection("categorias").doc("users").collection(this.user.uid).add(categoriaData)
      .then(item => {
        this.router.navigate(['/principal/categoria/lista']);
      });
  };

}
