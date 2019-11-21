import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

declare var $:any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private sub: any;
  id: any;

  user;

  item: any;

  constructor(private route: ActivatedRoute,
      private router: Router,
      private db: AngularFireDatabase,
      public afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    $('.carousel').carousel();

    this.sub = this.route.params.subscribe(params => {
      const param = params['id'];
      if (param) {
        this.id = params['id'];

        this.user = this.afAuth.auth.currentUser;
        this.getData();

      } else {
        this.router.navigate(['/principal']);
      }
    });
  }

  getData() {
      //database
      this.db.object('categorias/users/' + this.user.uid + "/" + this.id).valueChanges().subscribe(item => {
        this.item = item;
      });

      // firestore
    // this.itemDoc = this.afs.doc<Item>('categorias/users/');
    // this.item = this.itemDoc.valueChanges();

  }
}
