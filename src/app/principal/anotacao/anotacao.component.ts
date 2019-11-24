import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

declare var $:any;

@Component({
  selector: 'app-anotacao',
  templateUrl: './anotacao.component.html',
  styleUrls: ['./anotacao.component.css']
})
export class AnotacaoComponent implements OnInit {

  private sub: any;
  id: any;

  user;

  item: any;
  itemCat: any;
  categoriaId: any;
  
  images;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth) { }

  ngOnInit() {
    $('.tabs').tabs();
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
    this.db.object('anotacoes/users/' + this.user.uid + "/" + this.id).valueChanges().subscribe(item => {
      this.item = item;
      this.categoriaId = this.item.categoriaId;

        //database
      this.db.object('categorias/users/' + this.user.uid + "/" + this.categoriaId).valueChanges().subscribe(item => {
        this.itemCat = item;
      });
    });
  }
}
