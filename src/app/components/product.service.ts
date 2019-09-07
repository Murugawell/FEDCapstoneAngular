import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
    private _productsUrl = "http://localhost:3000/products";
    private count=105;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }

    getProducts() {
        return this._http.get(this._productsUrl);
    }
    getProduct(id) {
        const url = `${this._productsUrl}/${id}`;        
        return this._http.get(url, this.httpOptions);
    }

    addProduct(product) {
        this.count++;
        let newProduct = {
            "productName": product.productName,
            "productDescription":product.description,            
            "quantity": product.quantity,
            "id":product.productID,
            "manufacturer":product.manufacturer,
            "price":product.price
            
        }
        
        return this._http.post(this._productsUrl, newProduct, this.httpOptions);
    }
    editProduct(id,product) {
        this.count++;
        let newProduct = {
            "productName": product.productName,
            "productDescription":product.description,            
            "quantity": product.quantity,
            "id":product.productID,
            "manufacturer":product.manufacturer,
            "price":product.price
            
        }
        
        const url = `${this._productsUrl}/${id}`;
        return this._http.put(url,newProduct, this.httpOptions);
    }
    deleteProduct(id) {
       
        const url = `${this._productsUrl}/${id}`;
        return this._http.delete(url, this.httpOptions);
    }

   
}
