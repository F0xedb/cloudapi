import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  list = [];
  constructor() {
    this.list = [
      { name: "test", url: "https://www.google.com" },
      { name: "testing", url: "https://www.google.com" },
      { name: "Facebook", url: "https://www.google.com" },
      { name: "DuckDuckGo", url: "https://www.google.com" },
      { name: "arch", url: "https://www.google.com" },
      { name: "youtube", url: "https://www.google.com" },
      { name: "google", url: "https://www.google.com" },
      { name: "hello", url: "https://www.google.com" }
    ];
  }

  ngOnInit() {}
}
