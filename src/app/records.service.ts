import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['Adam Tailer', 'E234', 'at@abc.net'];
  info2: string[] = ['sai Tailer', 'E345', 'at@abcd.net'];
  info3: string[] = ['kumar Tailer', 'E456', 'at@abce.net'];
  getinfo1(): string[] {
    return this.info1;
  }
  getinfo2(): string[] {
    return this.info2;
  }
  getinfo3(): string[] {
    return this.info3;
  }
  constructor() {}
}
