import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private sub: any;
  id: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    $('.carousel').carousel();

    this.sub = this.route.params.subscribe(params => {
      const param = params['id'];
      if (param) {
        this.id = params['id'];
      } else {
        this.router.navigate(['/principal']);
      }
    });
  }

}
