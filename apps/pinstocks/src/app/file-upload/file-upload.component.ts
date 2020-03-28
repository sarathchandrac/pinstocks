import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CSVRecord } from '../CSVModel';

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
  selector: 'pinstocks-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    /*
    this.http.get('sample.csv').subscribe(data => {
      console.log(data);
    });
    */
  }
  public records: any[] = [];

  public title =
    'Categorized based on PE Ratio with Cash Rich stocks in March 2020';

  public type = 'PieChart';
  public data: any;
  public tableData: any;
  public columnNames = ['Browser', 'Percentage'];
  public options = {
    colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
    is3D: true
  };
  public width = 550;

  public height = 400;
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {
    let text = [];
    let files = $event.srcElement.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(
          csvRecordsArray,
          headersRow.length
        );
        console.log('data');
        this.data = this.getChartData(this.records);
        // console.log('data1', this.data);
      };

      reader.onerror = function() {
        console.log('error is occured while reading file!');
      };
    } else {
      alert('Please import valid .csv file.');
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');

      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();

        csvRecord.name = curruntRecord[0].trim();
        csvRecord.subSector = curruntRecord[1].trim();
        csvRecord.cap = curruntRecord[2].trim();
        csvRecord.LTP = curruntRecord[3].trim();
        csvRecord.PE = curruntRecord[4].trim();
        csvRecord.YGwt = curruntRecord[5].trim();
        csvRecord.YEPS = curruntRecord[6].trim();
        csvRecord.EPS = curruntRecord[7].trim();
        csvRecord.NCash = curruntRecord[8].trim();
        csvRecord.OCash = curruntRecord[9].trim();
        csvArr.push(csvRecord);
      }
      // Name,Sub-Sector,Market Cap,Close Price,PE Ratio,1Y Hist Op. Cash Flow Growth,1Y Historical EPS Growth,Earnings Per Share,Net Change in Cash,Operating Cash Flow
    }
    return csvArr;
  }
  getChartData(inputData: CSVRecord[]) {
    let result = inputData.map((record: CSVRecord) => ({
      name: record.name,
      PE: record.PE
    }));
    console.log('result', result);
    return [
      ['VeryLow', 45.0],
      ['Low', 26.8],
      ['High', 12.8],
      ['VHigh', 8.5]
    ];
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = '';
    this.records = [];
  }
}
