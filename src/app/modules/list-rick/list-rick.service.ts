import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListRickService {

constructor(
  private http: HttpClient,
) { }

getRicksList(basePath: string):Observable<any>{
  return this.http.get<any>(basePath)
       .pipe(map(response => response as any | any))
}

}
