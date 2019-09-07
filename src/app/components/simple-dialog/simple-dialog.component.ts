import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductService } from '../product.service';

export interface DialogData {
  
  id: string;
}

@Component({
  selector: 'app-simple-dialog',
  templateUrl: './simple-dialog.component.html',
  styleUrls: ['./simple-dialog.component.css']
})
export class SimpleDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<SimpleDialogComponent>,private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    product = [];
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    // this.getProduct();
  }
  // getProduct() {
  //   this._productService.getProducts().subscribe(
  //     (product: any) => this.product = product,
  //     err => console.log(err)
  //   );

  // }
  deleteConfirm(id){
   this.dialogRef.close(true)
  }
}
