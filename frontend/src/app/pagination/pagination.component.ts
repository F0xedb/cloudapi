import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input() size: number;
  @Input() start: number;
  @Input() update: EventEmitter<any>;
  @Output() callback = new EventEmitter<number>();
  pages = [];

  constructor() {
    console.log("Creating pagination");
  }

  ngOnInit() {
    console.log(this.size, this.start);
    this.updatePages(this.start);
    console.log(this.pages);
    this.update.subscribe(x => {
      this.updatePages(x);
    });
  }

  updatePages(start) {
    console.log("Updating pagination: " + start);
    this.pages = [];
    for (let i = 0; i < this.size; i++) {
      this.pages.push(i + start);
    }
  }

  goto(pagenum) {
    console.log("Going to page number " + pagenum);
    this.callback.emit(pagenum);
  }

  next() {
    this.callback.emit(this.start + 1);
    console.log("Going to page number: " + this.start + 1);
  }

  previous() {
    if (this.start != 0) {
      this.callback.emit(this.start - 1);
      console.log("Going to page number: " + (this.start - 1));
    }
  }
}
