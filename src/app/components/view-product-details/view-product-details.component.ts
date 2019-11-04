import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SimpleDialogComponent } from '../simple-dialog/simple-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-view-product-details',
  templateUrl: './view-product-details.component.html',
  styleUrls: ['./view-product-details.component.css'],
   animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('250ms ease-out')),
      transition('inactive => active', animate('250ms ease-in'))
    ]),
    trigger('deleteFlipState', [
      state('active', style({
        transform: 'rotateX(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateX(0)'
      })),
      transition('active => inactive', animate('250ms ease-out')),
      transition('inactive => active', animate('250ms ease-in'))
    ])
  ]
})
export class ViewProductDetailsComponent implements OnInit {

  index: number;
  constructor(private _productService: ProductService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { }
  product = [];
  productDetail={};
  view=false;
  viewProducts=true;
  deleteIds=[];
  user=null;
  storeId(p){
    this.toggleDeleteFlip(p);
    if(this.deleteIds.length>0)
    {
      let exist=false;
        for(let i in this.deleteIds)
    {

      console.log(this.deleteIds[i]);
      if(this.deleteIds[i]==p.id)
      {
        exist=true;
        this.deleteIds.splice(parseInt(i),1);
        break;
          
      }
     
    }
     if(exist==false)
      {
        this.deleteIds.push(p.id);
        
      }
  }
  else
  {
    
     this.deleteIds.push(p.id);
  }
       
    this.user = sessionStorage.getItem('user');
  
    
    
  }
  redirect(){
    this.router.navigate(['/login']);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: '250px',
      data: { id:this.deleteIds }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.delete(this.deleteIds);
      }
    });
  }
  filteredProducts(products)
  {
      console.log(products);
    products.map((product,index)=>{
      this.product.push(product);
    });
    
      console.log(this.product);
    
  }
  openFilter(): void {
    const dialogRef = this.dialog.open(SimpleDialogComponent, {
      width: '800px',
      height:'500px',
      data: { value:'filter',products:this.product }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
   
        
       var array = this.product;
       this.product=[];
       let sampleProduct=[];
       let pro =[];
          for(let p in result)
   {
      pro=array.filter((d) => d.manufacturer == result[p]);
      this.filteredProducts(pro);
   }
   
       // this.product=array.filter(d => d.views == 0);
      }
    });
  }
  openEdit(id) {

    this.index = 1;
    this.router.navigate(['dashboard/editProduct/'+id]);
  }
  getProduct() {
    this._productService.getProducts().subscribe(
      (product: any) => {this.product = product;
       for(let p in this.product)
   {
     this.product[p].flip="inactive";
     this.product[p].deleteFlip="inactive";
    
   }
var array = this.product;
array.sort(function (a, b) {
  return b.views - a.views;
});
  // this.product=array.filter(d => d.views == 0);
console.log('arr1', array,'type',typeof(array));
},
      err => console.log(err)
    );

  }
  sortPrice(value)
  {
    var array = this.product;
    if(value=='high')
    {
      array.sort(function (a, b) {
       return b.price - a.price;
      });
    }
    else
    {
       array.sort(function (a, b) {
       return a.price - b.price;
      });
    }
  }
  sortViews(value){
     var array = this.product;
    if(value=='high')
    {
      array.sort(function (a, b) {
       return b.views - a.views;
      });
    }
    else
    {
       array.sort(function (a, b) {
       return a.views - b.views;
      });
    }
  }
  viewDetails(productDet)
  {
    console.log(productDet);
    this.productDetail=productDet;
    this._productService.updateViews(productDet).subscribe((res) => {
      if (res) {
        this.getProduct();
      }
    });
    this.viewProducts=false;    
    this.view=true;
  }
  toggleBack()
  {
    this.view=false;    
    this.viewProducts=true;    
  }
  delete(id) {
    let len=id.length;
        let i=0;
        let ids='';
        while(len>i)
        {
          this._productService.deleteProduct(id[i]).subscribe((res) => {
           if (res) {
           this.getProduct();
           }
           });
           i++;
        }
    this.deleteIds=[];
  }
  ngOnInit() {
    this.index = 0; 
    this.view=false;    
    this.viewProducts=true; 
    this.getProduct();
   
  }
  flip: string = 'inactive';
  deleteFlip: string ='inactive';
  toggleFlip(item) {
   
   
    item.flip = (item.flip == 'inactive') ? 'active' : 'inactive';
  }
   toggleDeleteFlip(item) {
   
   
    item.deleteFlip = (item.deleteFlip == 'inactive') ? 'active' : 'inactive';
  }


}
