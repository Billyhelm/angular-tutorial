import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Adam Taylor", "343", "email1@gmail.com"]
  info2: string[] = ["Pete Paul", "453", "email2@gmail.com"]
  info3: string[] = ["Just End", "898", "email3@gmail.com"]

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
