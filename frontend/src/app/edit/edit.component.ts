import { Component, OnInit } from "@angular/core";
import { HistoryService } from "../shared/history.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  item = undefined;

  constructor(
    private history: HistoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.reset();
  }

  ngOnInit() {}

  put() {
    this.history.put(this.item);
    this.router.navigate(["history"]);
  }

  reset() {
    const id = window.location.href.split("/")[
      window.location.href.split("/").length - 1
    ];
    this.history.getById(id).subscribe(
      x => {
        this.item = x[0];
      },
      err => {
        console.log(err);
      }
    );
  }
}
