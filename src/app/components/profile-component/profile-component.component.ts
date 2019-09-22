import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  constructor(private fb: FormBuilder, private _productService: ProductService) { }
  profile: {}
  profileForm = this.fb.group({
    firstName: '',
    lastName: '',
    emailID: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
    location: ''
  });
  ngOnInit() {
    this.getProfile();
    this.disableForm();
  }
  disableForm() {
    Object.keys(this.profileForm.value).forEach((ele) => {
      this.profileForm.get(ele).disable();
    })
  }

  getProfile() {
    let user = this._productService.getUserSession();
    let userObj = JSON.parse(user);
    this._productService.getUser(userObj.emailID).subscribe(
      (profile: any) => {
        console.log(profile);
        this.profile = profile[0];
        this.profileForm.patchValue({
          firstName: profile[0].firstName,
          lastName: profile[0].lastName,
          emailID: profile[0].emailID,
          mobileNo: profile[0].mobileNo,
          password: profile[0].password,
          confirmPassword: profile[0].confirmPassword,
          location: profile[0].location
        });
      },
      err => console.log(err)
    );
  }
  editProfile() {
    Object.keys(this.profileForm.value).forEach((ele) => {
      if (ele !== 'emailID')
        this.profileForm.get(ele).enable();
    })
  }
  updateProfile() {
    let user = this._productService.getUserSession();
    let userObj = JSON.parse(user);
    console.log(userObj)
    this._productService.editProfile(userObj.id, this.profileForm.getRawValue()).subscribe(
      (res) => {
        console.log(res)
      }
      ,
      err => console.log(err)
    );

  }
}
