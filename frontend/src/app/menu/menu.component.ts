import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { SearchCommunicatorService } from "../shared/search-communicator.service";
import { combineLatest } from "rxjs";

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

  constructor(private com: SearchCommunicatorService) {}

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
  }

  log() {
    console.log(this.search);
    this.com.query(this.search);
  }

  reset(): void {
    for (let i = 0; i < this.menu.length; i++) {
      this.menu[i].nativeElement.classList.remove("active");
    }
  }
}