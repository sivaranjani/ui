import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { TrendsPopupComponent } from '../trends-popup/trends-popup.component';
import { GroceryService } from './grocery.service';
import { Item } from './item';

@Component({
  selector: 'image-graph',
  templateUrl: './image-graph.component.html',
  styleUrls: ['./grocery.component.css']
})
export class ImageGraphComponent implements ICellRendererAngularComp, OnDestroy{
 
  constructor(private  dialog:  MatDialog) { }

  ngOnInit(): void {
  }
   params: any;
   itemName:any;
   itemId: any;
   expression: boolean = true;
    public url = 'http://foo/bar';
    agInit(params: any): void {
        this.params = params;
        this.itemName= params.value;
        this.itemId = this.params.data.itemId;
    }
    ngOnDestroy() {
        console.log(`Destroying SquareComponent`);
    }

    refresh(): boolean {
        return false;
    }
    loadTrend()
    {
        this.dialog.open(TrendsPopupComponent,{ data: {
            itemName:  this.itemName,
            itemId:  this.itemId
            }}); 
    }
       

    

}
