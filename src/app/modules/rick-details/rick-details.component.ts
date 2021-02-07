import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
import routesApi from 'src/environments/routes-api';

import { ListRickService } from '../../../shared/services/list-rick.service';

@Component({
  selector: 'app-rick-details',
  templateUrl: './rick-details.component.html',
  styleUrls: ['./rick-details.component.sass']
})
export class RickDetailsComponent extends ListRickService implements OnInit {

  public rick: any
  public showModal: boolean = false;

  constructor(
    private _http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){
    super(_http)
  }

  ngOnInit() {
    this.getRick()
  }

  getRick(){
    const { all } = routesApi.routes.character;
    const id = this.route.snapshot.params['id']
    this.getRicksList(`${all}/${id}`).subscribe(response => {
      this.rick = response;
    })
  }

  historic(id: any){
    this.router.navigate(['historic', id])
  }

  openModal(){
   this.showModal = true;
  }

}
