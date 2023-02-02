import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    @Inject("BASEURL") private BASEURL: string,
    @Inject("APIKEY") private APIKEY: string,
    @Inject("LANGUAGE") private LANGUAGE: string,
    private http: HttpClient
  ) { }

  getList(): Observable<any> {
    return this.http.get(`${this.BASEURL}genre/movie/list?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }


  getMovies(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}genre/${id}/movies?api_key=${this.APIKEY}`);
  }

}
