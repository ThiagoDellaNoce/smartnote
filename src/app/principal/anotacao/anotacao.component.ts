import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-anotacao',
  templateUrl: './anotacao.component.html',
  styleUrls: ['./anotacao.component.css']
})
export class AnotacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let el = $('.tabs').tabs();
    // let instance = M.Tabs.init(el, {});

    $(".carousel").carousel();
  }

}
