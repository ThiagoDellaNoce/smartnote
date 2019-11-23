import { Component, OnInit } from '@angular/core';

declare var $:any;

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {

    $('.materialboxed').materialbox();
  }

  criarConta () {

    let email = $("#email").val();
    let password = $("#password").val();

    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        console.log(error);
      })
      .then(data => {
        console.log(data);
        this.logado();
      });

  }

  logado() {
    this.router.navigate(['/principal']);
  }
}
