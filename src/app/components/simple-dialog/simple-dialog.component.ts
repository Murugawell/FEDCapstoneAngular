import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { ProductService } from "../product.service";
import { FormControl } from "@angular/forms";
export interface DialogData {
  id: string;
  products: any;
}
import { FormBuilder } from '@angular/forms';
@Component({
  selector: "app-simple-dialog",
  templateUrl: "./simple-dialog.component.html",
  styleUrls: ["./simple-dialog.component.css"]
})
export class SimpleDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<SimpleDialogComponent>,
    private fb: FormBuilder,
    private _productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  Manufacturers = new FormControl();
  manufacturersList: string[] = [];
  
  product = [];
  onNoClick(): void {
    this.dialogRef.close();
  }
  onFilter(){
   console.log(this.Manufacturers.value);
   this.dialogRef.close(this.Manufacturers.value);
  }
  ngOnInit() {
    // this.getProduct();
    let products=[];
    if(this.data&&this.data.products){
      products=this.data.products;      
    }
    let man = [];
    console.log(products);
    if(products!=undefined)
    {
      for (let p in products) {
      man.push(products[p].manufacturer);
    }
    //  console.log(man);
    let filteredList = man => man.filter((v, i) => man.indexOf(v) === i);
    this.manufacturersList = filteredList(man);

    }
    
    // console.log(this.manufacturersList);
  }
  
  // getProduct() {
  //   this._productService.getProducts().subscribe(
  //     (product: any) => this.product = product,
  //     err => console.log(err)
  //   );

  // }
  deleteConfirm(id) {
    this.dialogRef.close(true);
  }
}
