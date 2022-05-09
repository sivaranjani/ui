import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GroceryService } from './grocery.service';
import { ImageGraphComponent } from './image-graph.component';
import { Item } from './item';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  rowData: Item[] =[];
  itemList: Item[] =[];
  expression: Boolean=true;
  columnDefs: ColDef[] = [
    { field: 'itemId',hide:true},
    { field: 'itemName',sortable:true, filter:true ,width:140,cellRendererFramework:ImageGraphComponent},
    { field: 'itemPrice' ,sortable:true,filter:true,width:140 },
    { field: 'itemPriceDate',sortable:true,width:260}
];

  constructor(private service:GroceryService,public datepipe: DatePipe) { }

  ngOnInit(){
    console.log('init');
    let itemResponse = this.service.getItems();
    console.log(itemResponse);
    itemResponse.subscribe((data) => 
    {
      this.itemList = data;
      this.loadData(this.itemList);
    })
  }
  loadData(items:Item[])
  {
    items.forEach(i => {
        let priceDate = this.datepipe.transform(i.itemPriceDate, 'yyyy-MM-dd');
        if(priceDate)
        i.itemPriceDate = priceDate;      
    });
    this.rowData = items;
  }

  methodFromParent(rowIndex: any) {
    console.log(rowIndex);
    //this.openMydialogPopUp();
}

}
