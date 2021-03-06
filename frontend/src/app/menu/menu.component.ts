import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { SearchCommunicatorService } from "../shared/search-communicator.service";
import { Router } from "@angular/router";
import { LoginService } from "../shared/login.service";
@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  @ViewChild("home") home;
  @ViewChild("messages") messages;
  @ViewChild("friends") friends;

  menu = [];

  search = "";

  name = "Unknown";
  url = "";

  constructor(
    private com: SearchCommunicatorService,
    private sign: LoginService,
    private router: Router
  ) {
    this.sign.subject.subscribe(x => {
      this.name = x.name;
      this.url = x.image;
      console.log(`${x.name}`);
    });
  }

  callback(name, url) {
    this.name = name;
    this.url = url;
    console.log(`Updating user ${name} ${url}`);
    console.log(`Updating user ${this.name} ${this.url}`);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.menu.push(this.home);
    this.menu.push(this.messages);
    this.menu.push(this.friends);
  }

  selected(value: number): void {
    this.reset();
    this.menu[value].nativeElement.classList.add("active");
    console.log(this.search);
    this.navigate(value);
  }

  navigate(value: number) {
    switch (value) {
      case 0:
        this.router.navigate(["home"]);
        break;
      case 1:
        this.router.navigate(["search"]);
        break;
      case 2:
        this.router.navigate(["history"]);
        break;
      default:
        this.router.navigate([""]);
        break;
    }
  }

  log() {
    console.log(this.search);
    this.navigate(1);
    this.com.query(this.search);
  }

  reset(): void {
    for (let i = 0; i < this.menu.length; i++) {
      this.menu[i].nativeElement.classList.remove("active");
    }
  }
}
