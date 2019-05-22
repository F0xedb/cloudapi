import { Component, OnInit, EventEmitter } from "@angular/core";
import { SearchService } from "../shared/search.service";
import { query } from "@angular/core/src/render3";
import { SearchCommunicatorService } from "../shared/search-communicator.service";
import { PaginationComponent } from "../pagination/pagination.component";

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
    private com: SearchCommunicatorService
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
}
