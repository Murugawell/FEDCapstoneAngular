import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

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
    label: 'Reports',
    path: '/reports'
  }

  ];
  constructor(private router: Router, private route: ActivatedRoute,private _productService: ProductService) { }
  show:boolean;
  ngOnInit() {
    let user=this._productService.getUserSession();

    if(user==null)
    {
      console.log(user);
      this.show=false;
    }
    else
    {
      console.log(user);      
      this.show=true;
    }
  }
  navigate(path) {

    this.router.navigate([this.route.snapshot.url + '/' + path]);
  }
  logout(){
    this._productService.removeUserSession();
     this.router.navigate(['/']);
  }
}
