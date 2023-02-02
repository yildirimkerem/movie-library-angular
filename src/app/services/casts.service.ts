import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CastsService {

  constructor(
    @Inject("BASEURL") private BASEURL: string,
    @Inject("APIKEY") private APIKEY: string,
    @Inject("LANGUAGE") private LANGUAGE: string,
    @Inject("REGION") private REGION: string,
    private http: HttpClient
  ) { }


  getMovies(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}/credits?api_key=${this.APIKEY}`);
  }
  getDetail(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}person/${id}?api_key=${this.APIKEY}`);
  }

  getExternalData(id: string) {
    return this.http.get(`${this.BASEURL}person/${id}/external_ids?api_key=${this.APIKEY}`);
  }


}
