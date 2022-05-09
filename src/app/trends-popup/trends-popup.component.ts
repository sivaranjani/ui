import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import Chart from 'chart.js/auto';
import { GroceryService } from '../grocery/grocery.service';
import { Item } from '../grocery/item';
export interface Data {
  month: String;
  price: Number;
}

@Component({
  selector: 'app-trends-popup',
  templateUrl: './trends-popup.component.html',
  styleUrls: ['./trends-popup.component.css']
})
export class TrendsPopupComponent implements OnInit {
  @ViewChild('chart')
  chartElementRef!: ElementRef;

  chart!: any

  title = 'app';
  url = 'http://localhost:4000/results';
  month :string[]=[];
  price :number[]=[];
  itemList: Item[] =[];

  constructor(private  dialogRef:  MatDialogRef<TrendsPopupComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private elementRef: ElementRef,private service:GroceryService) { }
  
     
  ngOnInit() {

    let itemResponse = this.service.getItemDetails(this.data.itemId);   
    itemResponse.subscribe((response) => 
    {
      this.itemList = response;
      this.itemList.forEach(y => {
        this.month.push(y.itemPriceDateStr);
        this.price.push(y.itemPrice);
      });
   

    let htmlRef = this.elementRef.nativeElement.querySelector(`#yourCavasId`);

   
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              label:this.data.itemName,
              data: this.price,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          
          scales: {
            xAxes: {
              display: true
            },
            yAxes: {
              display: true
            },
          }
        }
      });
    });
  }
  
  public  closeMe() {
    this.dialogRef.close();
}

}
