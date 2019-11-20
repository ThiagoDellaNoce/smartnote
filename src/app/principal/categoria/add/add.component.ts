import { Component, OnInit } from '@angular/core';

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

  constructor(private firestore: AngularFirestore,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    let categoria = {
      nome: $("#nome").val(),
      professor: $("#professor").val()
    };

    this.firestore.collection('categorias').add(categoria)
      .then(item => {
        console.log(item);
        
        this.router.navigate(['/principal/categoria/lista']);
      });
  };

}
