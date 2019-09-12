import { Injectable } from '@angular/core';
import { CanActivate,CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './components/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {
  constructor(private _productService: ProductService,private router: Router, private route: ActivatedRoute) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let user=this._productService.getUserSession();
    console.log(user);
    if(user==null)
    {
    let isConfirm = confirm("Please login to continue");
    if(isConfirm) {
        this.router.navigate(['/']);
    } else {
      return false;
       
    }
  }
  else{
    return true;
  }
}
 canDeactivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
 
  
    let isConfirm = confirm("All your data will be unsaved if you leave this page");
    if(isConfirm) {
    return true;
    } else {
      return false;
       
    }
 
  }
}
