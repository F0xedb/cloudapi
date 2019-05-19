import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SearchCommunicatorService {
  callback = new EventEmitter<string>();
  constructor() {}

  query(search) {
    this.callback.emit(search);
  }
}
