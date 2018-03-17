import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchOn() {
    var searchbar = document.querySelector("#searchbar");
    searchbar.classList.add("active");
  }

  searchOff() {
    var searchbar = document.querySelector("#searchbar");
    searchbar.classList.remove("active");
  }

}
