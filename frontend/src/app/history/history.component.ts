import { Component, OnInit, EventEmitter } from "@angular/core";
import { HistoryService } from "../shared/history.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  list = [];
  callback = new EventEmitter<any>();
  startpage = 0;
  name = "";
  constructor(private history: HistoryService, private router: Router) {
    history.get(4, 0).subscribe(x => {
      this.list = x;
      console.log(x);
    });
  }

  ngOnInit() {}

  open(history) {
    window.open(history.url);
  }

  delete(history) {
    console.log("Deleting item" + history.id);
    this.history.delete(history.id);
  }

  edit(history) {
    console.log(history);
    this.router.navigate(["edit/" + history.id]);
  }

  searcher(page) {
    this.history.get(4, page, this.name).subscribe(x => (this.list = x));
    this.startpage = page;
    this.callback.emit(page);
  }

  update() {
    console.log(this.name);
    this.searcher(0);
  }
}
