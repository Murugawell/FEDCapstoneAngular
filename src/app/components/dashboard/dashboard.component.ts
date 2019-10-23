import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navItems = [{
    icon: 'dashboard',
    label: 'Dashboard',
    path: '/'
  },

  {
    icon: 'shopping_cart',
    label: 'Inventory',
    path: '/viewProducts'
  },
  {
    icon: 'add_shopping_cart',
    label: 'Add Product',
    path: '/addProduct'
  },
  {
    icon: 'group_add',
    label: 'Users',
    path: '/users'
  },
  {
    icon: 'show_chart',
    label: 'Reports',
    path: '/reports'
  },
  {
    icon: 'people',
    label: 'Developers',
    path: '/developers'
  }

  ];
  constructor(private router: Router, private route: ActivatedRoute, private _productService: ProductService,private _snackBar: MatSnackBar) { }
  show: boolean;
  user:{};
  ngOnInit() {
      this.user = JSON.parse(this._productService.getUserSession());

    if (this.user == null) {
      console.log(typeof(this.user));
      this.show = false;
    }
    else {
      console.log(typeof(this.user));
      this.show = true;
    }
  }
   redirect(){
    this.router.navigate(['/login']);
  }
  navigate(path) {

    this.router.navigate([this.route.snapshot.url + '/' + path]);
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  logout() {
    this._productService.removeUserSession();
    this.router.navigate(['/']);
    this.show=false;
     this.openSnackBar("Logged Out Successfully", "");
  }
}
