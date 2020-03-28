import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  Name: string;
  'Sub-Sector': string;
  'Market Cap': string;
  'Close Price': string;
  'PE Ratio': string;
  '1Y Hist Op. Cash Flow Growth': string;
  '1Y Historical EPS Growth': string;
  'Earnings Per Share': string;
  'Net Change in Cash': string;
  'perating Cash Flow': string;
}

@Component({
  selector: 'pinstocks-stocks-data',
  templateUrl: './stocks-data.component.html',
  styleUrls: ['./stocks-data.component.css']
})
export class StocksDataComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = [
    'name',
    'Sub-Sector',
    'Market Cap',
    'Close Price',
    'PE Ratio',
    '1Y Hist Op. Cash Flow Growth',
    '1Y Historical EPS Growth',
    'Earnings Per Share',
    'Net Change in Cash',
    'perating Cash Flow'
  ];
  @Input() dataSource: any;

  ngOnInit(): void {}
}
