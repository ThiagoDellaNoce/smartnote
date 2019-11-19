import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.parallax');
    // var instances = M.Parallax.init(elems, {});
    $('.carousel').carousel();
  }

}
