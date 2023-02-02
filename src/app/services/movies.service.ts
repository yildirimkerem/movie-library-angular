import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    @Inject("BASEURL") private BASEURL: string,
    @Inject("APIKEY") private APIKEY: string,
    @Inject("LANGUAGE") private LANGUAGE: string,
    @Inject("REGION") private REGION: string,
    private http: HttpClient
  ) {
  }

  getSearch(search: string): Observable<any> {
    return this.http.get(`${this.BASEURL}search/movie?api_key=${this.APIKEY}&query=${search}`);
  }

  getTrending(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/now_playing?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}&REGION=${this.REGION}`);
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/now_playing?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}&REGION=${this.REGION}`);
  }

  getPopular(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/popular?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}&REGION=${this.REGION}`);
  }

  getUpComing(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/upcoming?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}&REGION=${this.REGION}`);
  }

  getTopRated(page: number): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/top_rated?api_key=${this.APIKEY}&page=${page}&LANGUAGE=${this.LANGUAGE}&REGION=${this.REGION}`);
  }

  getDiscover(): Observable<any> {
    return this.http.get(`${this.BASEURL}discover/movie?api_key=${this.APIKEY}`);
  }


  getById(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}?api_key=${this.APIKEY}`);
  }

  getReviews(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}/reviews?api_key=${this.APIKEY}`);
  }

  getCredits(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}/credits?api_key=${this.APIKEY}`);
  }

  getBackdropsImages(id: string) {
    return this.http.get(`${this.BASEURL}movie/${id}/images?api_key=${this.APIKEY}`);
  }

  getVideos(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}/videos?api_key=${this.APIKEY}`);
  }

  getRecommendations(id: string): Observable<any> {
    return this.http.get(`${this.BASEURL}movie/${id}/recommendations?api_key=${this.APIKEY}`);
  }


}
