import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.css'],
  providers: [RecordsService],
})
export class EmpInfoComponent implements OnInit {
  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];
  getInfoFromServicelass1() {
    this.infoReceived1 = this.rservice.getinfo1();
  }
  getInfoFromServicelass2() {
    this.infoReceived2 = this.rservice.getinfo1();
  }
  getInfoFromServicelass3() {
    this.infoReceived3 = this.rservice.getinfo1();
  }

  constructor(private rservice: RecordsService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
