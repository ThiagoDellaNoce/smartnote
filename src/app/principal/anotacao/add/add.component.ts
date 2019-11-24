import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireObject, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

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

  uploadPercent: Observable<number>;
  mostraLoader = false;
  uploadPorCento;
  downloadURL: Observable<string>;

  images: any[] = [];
  imagensBool:boolean = false;

  constructor(private router: Router,
    public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage) { }

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
      imagens: this.images,
      userId: this.user.uid
    };

        //database
    this.itemRef = this.db.object('anotacoes/users/' + this.user.uid + "/" + itemId);
    this.item = this.itemRef.valueChanges();
    this.itemRef.set(anotacaoData).then(item => {
      this.router.navigate(['/principal/anotacao/lista']);
    });
  };

  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = 'name-your-file-path-here';
  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);
  // };
  uploadFile(event) {
    this.mostraLoader = true;

    for(let i = 0; i<event.target.files.length; i++) {
      const file = event.target.files[i];

      const filePath = file.name;
      const fileRef = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);

      // observe percentage changes
      task.percentageChanges().subscribe(res => {
        this.uploadPorCento = res;

      });

      // get notified when the download URL is available
      task.snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe( res => {
              this.images.push(res);
              this.imagensBool = true;

              this.mostraLoader = false;
            });
          })
        )
      .subscribe()
    }


  }

}
