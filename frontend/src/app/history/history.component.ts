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
}
