import { Component, OnInit } from '@angular/core';
import {HistoryItem} from "../../model";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList: HistoryItem[];

  constructor(private historyService: HistoryService) {
    this.historyList = [];
  }

  ngOnInit(): void {
    this.historyList = this.historyService.getHistoryList()
  }


}
