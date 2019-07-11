import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Item } from './item';
import { ItemPrice } from './itemPrice'

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  csvData: string[] = ['Apple', 'Orange', 'Banana'];
  dt: string = 'suwish,sdsada,sdasda,aSa,AS,asA';
  selVal: string;

  baseUrl: string = "https://5w7fjkrri4.execute-api.us-east-2.amazonaws.com/Dev";
  selItem: Item;
  selItemPriceList: ItemPrice[];
  selItemList: Item[];
  addnewval: boolean;
  configsession:boolean=false;
  pricesession:boolean=false;

  ngOnInit() {
  
    //this.getItemPriceList();
  }
  constructor(private http: HttpClient) {
    setTimeout(()=>{
      this.getItem();
      this.getItemPriceList();
    },1000);
    
  }

  public getUserList(): string[] {
    return ['Apple', 'Orange', 'Banana'];
  }
  public getUserList2(data: string): string[] {
    return data.split(",");
  }
  home(){
    this.configsession=false;
     this.addnewval = false;
    this.getItemList();
  }
  
  ChangingValue(df) {
    
    this.selVal=df;
    this.getItem();
    this.configsession=true;
    this.pricesession=false;
    
  }
  loadPriceList(df){
    this.selVal=df;
    this.getItem();
    this.getItemPriceList();
    this.configsession=false;
    this.pricesession=true;
  }
  addParam() {
    this.selItem.paramCount++;
  }
  addNewItem() {
    this.configsession=true;
    this.pricesession=false;
    this.addnewval = true;
    this.selItem = new Item();
    this.selItem.paramCount = 1;
  }
  saveItem() {
    this.http.post(this.baseUrl + '/item', this.selItem).subscribe((res: Item[]) => {
      this.getItem();
      this.configsession=false;
      this.addnewval = false;
    });

  }

  getItemList() {
    this.http.get(this.baseUrl + '/item').subscribe((res: Item[]) => {
      if (res.length > 0) {
        this.selItemList = res;
      }
    });
  }
  getItem() {

    this.http.get(this.baseUrl + '/item/' + this.selVal).subscribe((res: Item) => {
      if (res) {
        this.selItem = res;
      }

    });
  }



  getItemPriceList() {

    this.http.get(this.baseUrl + '/itemprice/' + this.selVal).subscribe((res: ItemPrice[]) => {
      if (res.length > 0) {
        this.selItemPriceList = res;
        console.log(this.selItemPriceList.length);
      }

    });
  }

  addPriceItem() {
    if (!this.selItemPriceList) {
      this.selItemPriceList = [];
    }
    let newItemPrice: ItemPrice = new ItemPrice();
    newItemPrice.itemId = this.selItem.id;
    this.selItemPriceList.push(newItemPrice);
  }
  savePriceItem() {
    this.http.post(this.baseUrl + '/itemprice', this.selItemPriceList).subscribe((res) => {
      this.getItemPriceList();

    });
  }

}
