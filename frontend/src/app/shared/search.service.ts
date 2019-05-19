import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { data } from "./mocksearch";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private BASE_URL = " https://www.googleapis.com/";
  private API_KEY = "AIzaSyAXFGAj_awXKkT24QkI2zjrULlg0N_exAE";
  private CX = "017576662512468239146:omuauf_lfve";

  constructor(private http: HttpClient) {}

  getSearchResultList(query, size = 8, page = 0): Observable<any> {
    return this.http.get(
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
        page * size +
        1
    );
  }
  getMock(query: string, size = 8, page = 0): any {
    return data;
  }
}
