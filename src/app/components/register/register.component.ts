import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private _productService: ProductService,private _snackBar: MatSnackBar) { }
  registerForm = this.fb.group({
    firstName: '',
    lastName: '',
    emailID: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    location:''
  });
  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  registerProfile(){
     console.log(this.registerForm.value);
    // if (this.productName.length > 0 && this.quantity > 0) {
    //   this.getProductEvent.emit({ productName: this.productName, description: this.description, manufacturer: this.manufacturer, price: this.price, quantity: this.quantity });

    this._productService.registerProfile(this.registerForm.getRawValue()).subscribe((res) => {
      this.registerForm = this.fb.group({
    firstName: '',
    lastName: '',
    emailID: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    location:''
  });
      this.openSnackBar("Registered Successfully", "");
    });
  }
}
