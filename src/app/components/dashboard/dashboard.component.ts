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
    icon: 'person',
    label: 'Dashboard',
    path: '/'
  },

  {
    icon: 'person',
    label: 'Inventory',
    path: '/viewProducts'
  },
  {
    icon: 'person',
    label: 'Add Product',
    path: '/addProduct'
  },
  {
    icon: 'person',
    label: 'Users',
    path: '/users'
  },
  {
    icon: 'person',
    label: 'Reports',
    path: '/reports'
  },
  {
    icon: 'person',
    label: 'Developers',
    path: '/developers'
  }

  ];
  constructor(private router: Router, private route: ActivatedRoute, private _productService: ProductService,private _snackBar: MatSnackBar) { }
  show: boolean;
  ngOnInit() {
    let user = this._productService.getUserSession();

    if (user == null) {
      console.log(user);
      this.show = false;
    }
    else {
      console.log(user);
      this.show = true;
    }
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
