import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private fb: FormBuilder, private _productService: ProductService) {
   }
   loginForm = this.fb.group({
    userName:'',
    password:''
  });
     errorMsg='';
  
  ngOnInit() {
    
  }
  public login() {
    console.log(this.loginForm.value);
      if(this.loginForm.value.userName.length>0&&this.loginForm.value.password.length>0)
      {
         this._productService.getUser(this.loginForm.value.userName).subscribe(
      (user: any) => {
        console.log(user);
        if(user.length>0){
           if(user[0].password==this.loginForm.value.password)
        {
        this.router.navigate(['/dashboard']);          
      }
      else
       {
         this.errorMsg="Password is incorrect";
       }
        }
       else
       {
         this.errorMsg="Invalid Username";
       }
       
      }
      ,
      err => console.log(err)
    );
      }
      else{
        this.errorMsg="Please enter credentials";
      }
     
  
    
        

  }
  public register() {
    this.router.navigate(['/registration']);
  }
}
