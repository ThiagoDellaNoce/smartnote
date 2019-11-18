import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    let el = $('.tabs').tabs();
    // let instance = M.Tabs.init(el, {});

    $(".carousel").carousel();
  }

}
