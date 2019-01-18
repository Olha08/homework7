import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'geek-list-and-table',
  templateUrl: './list-and-table.component.html',
  styleUrls: ['./list-and-table.component.scss']
})
export class ListAndTableComponent implements OnInit {

  cities = ['Kiev', 'Lviv', 'Cherkassy', 'Dnipro'];

  constructor() { }

  ngOnInit() {
  }

}
