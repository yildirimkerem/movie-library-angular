import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    @Inject("BASEURL") private BASEURL: string,
    @Inject("APIKEY") private APIKEY: string,
    @Inject("LANGUAGE") private LANGUAGE: string,
    @Inject("REGION") private REGION: string,
    private http: HttpClient
  ) {}




}
