import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _productService: ProductService) { }
  public users=[];
  ngOnInit() {
    
    this._productService.getUsers().subscribe(
      (users: any) => {
        console.log(users);
        this.users=users;
      })

  }

}
