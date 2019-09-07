import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css']
})
export class ViewProductDetailsComponent implements OnInit {

  index: number;
  constructor(private _productService: ProductService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }
  product = [];
  openDialog(id): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: '250px',
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.delete(id);
      }
    });
  }
  openEdit(id) {

    this.index = 1;
    this.router.navigate([decodeURI(this.router.url) + '/editProduct/'+id]);
  }
  getProduct() {
    this._productService.getProducts().subscribe(
      (product: any) => this.product = product,
      err => console.log(err)
    );

  }
  delete(id) {

    this._productService.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.getProduct();
      }
    });
  }
  ngOnInit() {
    this.getProduct();
  }

}
