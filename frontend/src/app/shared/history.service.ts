import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  constructor(private http: HttpClient, private auth: LoginService) {}

  getHeaders() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.auth.id}`,
        id: this.auth.userid
      })
    };
  }

  get(length: number, page: number, name = ""): Observable<any> {
    return this.http.get(
      "http://www.pbfp.xyz:5000/api/v1/" +
        environment.BACKEND_HISTORY +
        `?length=${length}&page=${page}&name=${name}`,
      this.getHeaders()
    );
  }

  getById(id): Observable<any> {
    return this.http.get(
      environment.BACKEND + environment.BACKEND_HISTORY + "/" + id,
      this.getHeaders()
    );
  }

  delete(id) {
    this.http
      .delete(
        environment.BACKEND + environment.BACKEND_HISTORY + "/" + id,
        this.getHeaders()
      )
      .subscribe();
  }

  post(name, url) {
    this.http
      .post(
        environment.BACKEND + environment.BACKEND_HISTORY,
        {
          name: name,
          url: url
        },
        this.getHeaders()
      )
      .subscribe();
  }

  put(history) {
    this.http
      .put(
        environment.BACKEND + environment.BACKEND_HISTORY,
        history,
        this.getHeaders()
      )
      .subscribe();
  }
}
