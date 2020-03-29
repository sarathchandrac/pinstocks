import { Component, OnInit, Input } from '@angular/core';

export interface Stock {
  name: string;
  subSector: string;
  cap: string;
  LTP: string;
  PE: string;
  YGwt: string;
  YEPS: string;
  EPS: string;
  NCash: string;
  OCash: string;
}

@Component({
  selector: 'pinstocks-stocks-data',
  templateUrl: './stocks-data.component.html',
  styleUrls: ['./stocks-data.component.css']
})
export class StocksDataComponent implements OnInit {
  @Input() dataSource: Stock[];
  

  constructor() {}

  displayedColumns: string[] = [
    'name',
    'subSector',
    'cap',
    'LTP',
    'PE',
    'YGwt',
    'YEPS',
    'EPS',
    'NCash',
    'OCash'
  ];

  ngOnInit(): void {}
}
