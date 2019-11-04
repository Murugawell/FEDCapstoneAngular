import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MaterialModule } from './material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { SimpleDialogComponent } from './components/simple-dialog/simple-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductService } from './components/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BarchartComponent } from './components/barchart/barchart.component';
import { ChartsModule } from 'ng2-charts';
import { UsersComponent } from './components/users/users.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddProductComponent,
    ViewProductDetailsComponent,
    SimpleDialogComponent,
    DashboardComponent,
    EditProductComponent,
    ProfileComponentComponent,
    BarchartComponent,
    UsersComponent,
    DevelopersComponent,
    AboutComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents:[SimpleDialogComponent]
})
export class AppModule { }
