import { Component, OnInit, EventEmitter } from "@angular/core";
import { SearchService } from "../shared/search.service";
import { SearchCommunicatorService } from "../shared/search-communicator.service";
import { HistoryService } from "../shared/history.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  data = undefined;
  startpage = 0;
  query = "";
  callback = new EventEmitter<any>();

  constructor(
    private google: SearchService,
    private com: SearchCommunicatorService,
    private history: HistoryService
  ) {
    com.callback.subscribe(x => {
      this.search(x);
    });
  }

  search(query) {
    this.query = query;
    this.google.getSearchResultList(this.query, 8, 0).subscribe(data => {
      this.data = data;
      this.startpage = 0;
      this.callback.emit(0);
    });
  }

  ngOnInit() {
    this.data = undefined;
  }

  searcher(page) {
    console.log("Inside list component - searcher received: " + page);
    this.google.getSearchResultList(this.query, 8, page).subscribe(data => {
      this.data = data;
      this.startpage = page;
      this.callback.emit(page);
    });

    this.startpage = page;
    this.callback.emit(page);
  }

  open(item) {
    this.history.post(item.title, item.link);
    window.open(item.link);
  }
}
