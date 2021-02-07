import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'

import { ListRickService } from '../../../shared/services/list-rick.service';
import routesApi from 'src/environments/routes-api';

@Component({
  selector: 'app-historic-rick',
  templateUrl: './historic-rick.component.html',
  styleUrls: ['./historic-rick.component.sass']
})
export class HistoricRickComponent extends ListRickService implements OnInit {

  public historics: any

constructor(
  private _http: HttpClient,
  private route: ActivatedRoute,
  private router: Router
){
  super(_http)
}

  ngOnInit() {
    this.renderHistoric();
  }

  renderHistoric(){
    const { get } = routesApi.routes.historic;

    this.getHistoric(get).subscribe(response => {
      this.historics = response;
    })
  }

}
