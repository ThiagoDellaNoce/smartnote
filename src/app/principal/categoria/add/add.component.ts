import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user;

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.afAuth.auth.currentUser;
  }

  onSubmit() {
    let itemId = this.db.createPushId();

    let categoriaData = {
      id: itemId,
      nome: $("#nome").val(),
      professor: $("#professor").val()
    };

        //database
    this.itemRef = this.db.object('categorias/users/' + this.user.uid + "/" + itemId);
    this.item = this.itemRef.valueChanges();
    this.itemRef.set(categoriaData).then(item => {
      this.router.navigate(['/principal/categoria/lista']);
    });
  };

}
