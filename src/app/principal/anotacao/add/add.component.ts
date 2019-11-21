import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user;

  list:any;

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.user = this.afAuth.auth.currentUser;

    this.getData();
  }

  getData() {
    //database
    this.db.list('categorias/users/' + this.user.uid + "/").valueChanges().subscribe(item => {
      this.list = item;
    });
  }

  onSubmit() {
    let itemId = this.db.createPushId();

    let anotacaoData = {
      id: itemId,
      nome: $("#nome").val(),
      texto: $("#texto").val(),
      categoriaId: $("#categoriaId").val(),
      userId: this.user.uid
    };

        //database
    this.itemRef = this.db.object('anotacoes/users/' + this.user.uid + "/" + itemId);
    this.item = this.itemRef.valueChanges();
    this.itemRef.set(anotacaoData).then(item => {
      this.router.navigate(['/principal/anotacao/lista']);
    });
  };

}
