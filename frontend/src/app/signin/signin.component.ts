import { Component, OnInit } from "@angular/core";
import { GoogleSignInSuccess } from "angular-google-signin";
import { LoginService } from "../shared/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"]
})
export class SigninComponent implements OnInit {
  constructor(private log: LoginService, private router: Router) {}

  ngOnInit() {}

  myClientId: string =
    "878891559196-is4h52tq1rlliflmq98v1191pmlrda71.apps.googleusercontent.com";

  succes(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    let profile: gapi.auth2.BasicProfile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    this.log.userid = id;
    this.log.id = googleUser.getAuthResponse().id_token;
    this.log.name = profile.getName();
    this.log.image = profile.getImageUrl();
    this.log.isLoggedIn = true;
    console.log(this.log.id);
    this.log.subject.next(this.log);
  }

  fail() {
    console.log("failed loggin in");
    this.log.reset();
  }
}
