import { Injectable } from '@angular/core';
import {HistoryItem} from "../model";
import {Observable} from "rxjs";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyList: HistoryItem[];


  constructor() {
    this.historyList = [];
  }

  getHistoryList(): HistoryItem[] {
    return this.historyList;
  }

  addHistoryItem(time: Date, method: string, endpoint: string): void {
    this.historyList.push({
      time: time,
      method: method,
      endpoint: endpoint
    });
  }


}
