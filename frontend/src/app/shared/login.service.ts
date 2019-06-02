import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  isLoggedIn = false;
  id = undefined;
  userid = undefined;
  name = "Unknown";
  image = "";
  subject = new Subject<any>();

  constructor() {
    this.reset();
  }

  reset() {
    this.isLoggedIn = false;
    this.id = undefined;
    this.name = "Unknown";
    this.image = "";
  }
}
