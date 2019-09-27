import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private _productService: ProductService,private _snackBar: MatSnackBar) { }
  profileForm = this.fb.group({
    productName: '',
    description: '',
    manufacturer: '',
    price: '',
    quantity: '',
    productID: [{ value: 1, disabled: true }]
  });
  product = [];
  length = 0;
  id = 100;
  ngOnInit() {
    this.getProduct();

  }
  getProduct() {
    this._productService.getProducts().subscribe(
      (product: any) => {
        this.product = product;
        if (this.product.length > 0) {
          let len = 1 + this.product[this.product.length - 1].id;
          console.log(len);
          this.profileForm.patchValue({
            productID: len, productName: '',
            description: '',
            manufacturer: '',
            price: '',
            quantity: '',
          });
        }
      },
      err => console.log(err)
    );

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  addProduct() {
    console.log(this.profileForm.value);
    // if (this.productName.length > 0 && this.quantity > 0) {
    //   this.getProductEvent.emit({ productName: this.productName, description: this.description, manufacturer: this.manufacturer, price: this.price, quantity: this.quantity });

    this._productService.addProduct(this.profileForm.getRawValue()).subscribe((res) => {
      console.log(res);
      this.openSnackBar("Product added Successfully", "");
      this.getProduct();
    });

    // }
  }
}
