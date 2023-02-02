import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(
    @Inject("BASEURL") private BASEURL: string,
    @Inject("APIKEY") private APIKEY: string,
    @Inject("LANGUAGE") private LANGUAGE: string,
    @Inject("REGION") private REGION: string,
    private http: HttpClient
  ) { }

  getById(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}tv/${id}?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }
  getCategory(): Observable<any> {
    return this.http.get(`${this.BASEURL}genre/tv/list?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }

  getByCategory(categoryId: string): Observable<any> {
    return this.http.get(`${this.BASEURL}discover/tv?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${categoryId}&include_null_first_air_dates=false`);
  }
  getSearch(search: string): Observable<any> {
    return this.http.get(`${this.BASEURL}search/tv?api_key=${this.APIKEY}&query=${search}`);
  }


  getOnTheAir(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}tv/on_the_air?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}`);
  }

  getAiringToday(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}tv/airing_today?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}`);
  }

  getPopular(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}tv/popular?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}`);
  }

  getTopRated(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}tv/top_rated?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}`);
  }
  getVideos(id: any) {
    return this.http.get(`${this.BASEURL}tv/${id}/videos?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }
  getBackdropsImages(id: string) {
    return this.http.get(`${this.BASEURL}tv/${id}/images?api_key=${this.APIKEY}`);
  }
  getMovieCredits(id: string) {
    return this.http.get(`${this.BASEURL}tv/${id}/credits?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }
  getRecommendations(id: string) {
    return this.http.get(`${this.BASEURL}tv/${id}/recommendations?api_key=${this.APIKEY}&LANGUAGE=${this.LANGUAGE}`);
  }
}
