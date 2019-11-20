import { Component, OnInit } from '@angular/core';

declare var $:any;

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    
    $('.materialboxed').materialbox();
  }

  loginWithGoogle () {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((credential) =>  {
        if(credential.user) {
          this.logado();
        }
    })
    .catch(error => console.log(error));
    
  }
  
  logado() {
    this.router.navigate(['/principal']);
  }

  loginEmailPasswd () {

    let email = $("#login").val();
    let senha = $("#password").val();

    this.afAuth.auth.signInWithEmailAndPassword(email, senha);

  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
