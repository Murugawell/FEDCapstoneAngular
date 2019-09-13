import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProductService {
    private _productsUrl = "http://localhost:3000/products";
    private _profileUrl = "http://localhost:3000/profiles";
    private count=105;
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
    };

    constructor (private _http: HttpClient) { }
    registerProfile(profile) {
         var now = new Date();
        //  console.log(now.getDate()+'-'+now.getMonth()+'-'+now.getYear());
         let newProfile = {
             firstName: profile.firstName,
             lastName: profile.lastName,
             emailID: profile.emailID,
             mobileNo: profile.mobileNo,
             password: profile.password,
             confirmPassword: profile.confirmPassword,
             location:profile.location,
             profileCreatedOn:now,
             lastLogin:now,
             profileUpdated:now
            
        }
         return this._http.post(this._profileUrl, newProfile, this.httpOptions);        
    }
    getProducts() {
        return this._http.get(this._productsUrl);
    }
    getProduct(id) {
        const url = `${this._productsUrl}/${id}`;        
        return this._http.get(url, this.httpOptions);
    }
    getUser(id) {
      //  const url = `${this._profileUrl}/${id}`;  
        let user={
            params:{
            "emailID":id}
        }
        this._http.get(this._profileUrl,user).subscribe(
      (user: any) => {
          console.log(user,"::::::::::",user[0]);
          sessionStorage.setItem('user',JSON.stringify(user[0]));
         
        });    
        return this._http.get(this._profileUrl,user);
    }
    getUserSession(){
        var user = sessionStorage.getItem('user');
        return user;
    }
    removeUserSession(){
        var user = sessionStorage.removeItem('user');
        sessionStorage.clear();
        return user;
    }
    
     editProfile(id,profile) {
         console.log(profile);
           let user=sessionStorage.getItem('user');
        let userObj=JSON.parse(user);
         var now = new Date();
          let newProfile = {
                'firstName': profile.firstName,
                'lastName': profile.lastName,
                'emailID': profile.emailID,
                'mobileNo': profile.mobileNo,
                'password': profile.password,
                'confirmPassword': profile.confirmPassword,
                'location':profile.location,
                'profileUpdated':now,
                'profileCreatedOn':userObj.profileCreatedOn,
                'lastLogin':userObj.lastLogin
        }
      
      
        
        const url = `${this._profileUrl}/${userObj.id}`;
        return this._http.put(url,newProfile, this.httpOptions);
    }
    addProduct(product) {
        this.count++;
        var now = new Date();
        let newProduct = {
            "productName": product.productName,
            "productDescription":product.description,            
            "quantity": product.quantity,
            "id":product.productID,
            "manufacturer":product.manufacturer,
            "price":product.price,
            "productAddedon":now
            
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
