import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'card',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent {

  @Input() rick: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  renderDetails(id: any){
    this.router.navigate(['details', id])
  }


}
