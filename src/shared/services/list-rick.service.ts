import { Injectable, Directive } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import routesApi from 'src/environments/routes-api';

@Injectable({
  providedIn: 'root'
})
export class ListRickService {

  public basePath = routesApi.routes.base;

  constructor(
    private http: HttpClient
  ) {}

  getRicksList(path: string, params?: { [key: string]: any}):Observable<any>{
    return this.http.get<any>(`${this.basePath}${path}`, params)
        .pipe(map(response => response as any | any))
  }
}
