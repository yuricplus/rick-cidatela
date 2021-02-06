import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'

import { ListRickService } from './../shared/services/list-rick.service';
import routesApi from 'src/environments/routes-api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
 
export class AppComponent extends ListRickService implements OnInit {
  title = 'rick-morty';

  public ricks: any;
  public pageTotal: number = 1
  public listPages : number[] = [1]
  constructor(
    private _http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ){
    super(_http)
  }

  ngOnInit(){
    this.getRicks(1)
  }

  getPage(page: any){
    this.getRicks(page)
  }

  getRicks(page: number){
    const { all } = routesApi.routes.character;
    this.getRicksList(`${all}?name=rick&page=${page}`).subscribe(response => {
      this.ricks = response.results;
      this.pageTotal = response.info.pages;
      this.getArrayPages()
    })
    this.router.navigate([], {queryParams: {page}})
  }

  getArrayPages():void{
    let arr = new Array();
    for(let index = 0; index !== this.pageTotal; index++){
        arr.push(index)
    }
    this.listPages = arr;
  }
}
