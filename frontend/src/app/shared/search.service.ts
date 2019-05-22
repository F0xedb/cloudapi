import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { data } from "./mocksearch";
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private BASE_URL = " https://www.googleapis.com/";
  private API_KEY = environment.API_KEY;
  private CX = environment.CX;

  constructor(private http: HttpClient) {}

  getSearchResultList(query, size = 8, page = 0): Observable<any> {
    const url =
      this.BASE_URL +
      "customsearch/v1?key=" +
      this.API_KEY +
      "&cx=" +
      this.CX +
      "&q=" +
      query +
      "&num=" +
      size +
      "&start=" +
      (page * size + 1);
    console.log("Requesting url:" + url);
    return this.http.get(url);
  }
  getMock(query: string, size = 8, page = 0): any {
    return data;
  }
}
