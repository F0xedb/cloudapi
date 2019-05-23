import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HistoryService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    return this.http.get(environment.BACKEND + environment.BACKEND_HISTORY);
  }

  delete(id) {
    this.http
      .delete(environment.BACKEND + environment.BACKEND_HISTORY + "/" + id)
      .subscribe();
  }
}
