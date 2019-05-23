import { Component, OnInit } from "@angular/core";
import { HistoryService } from "../shared/history.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  list = [];
  constructor(private history: HistoryService) {
    history.get().subscribe(x => {
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
}
