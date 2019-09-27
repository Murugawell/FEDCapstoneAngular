import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private fb: FormBuilder, private _productService: ProductService,private router: Router, private route: ActivatedRoute,private _snackBar: MatSnackBar) { }
  product={};
  profileForm = this.fb.group({
    productName: '',
    description: '',
    manufacturer: '',
    price: '',
    quantity: '',
    productID: [{ value: 1, disabled: true }]
  });
  ngOnInit() {
    this.getProduct();
    console.log(this.product);
    
  }

  getProduct() {
    this._productService.getProduct(this.route.snapshot.params.id).subscribe(
      (product: any) => {
        this.product=product;
        this.profileForm.patchValue({  productName: product.productName,
          description: product.productDescription,
          manufacturer: product.manufacturer,
          price: product.price,
          quantity: product.quantity,
          productID: product.id});
      }
        ,
      err => console.log(err)
    );

  }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  editProduct() {
    this._productService.editProduct(this.route.snapshot.params.id,this.profileForm.value,this.product).subscribe(
      (res) => {
        console.log(res)
          this.openSnackBar("Product updated Successfully", "");
      }
        ,
      err => console.log(err)
    );
    console.log(this.profileForm.value);
    
  }
}
