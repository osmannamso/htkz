import { Component, OnInit } from '@angular/core';
import {SearchResult} from '../../interfaces/search-result';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchResult: SearchResult;
  foundMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

  gotSearchResult($event: {searchResult: SearchResult, message: string}): void {
    this.searchResult = $event.searchResult;
    this.foundMessage = $event.message;
  }
}
