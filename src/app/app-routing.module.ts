import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';



const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'addProduct', component: AddProductComponent },
      {
        path: 'viewProduct', component: ViewProductDetailsComponent,
        children: [
          { path: 'editProduct/:id', component: EditProductComponent }]
      },

    ]
  },
  { path: 'registration', component: RegisterComponent },




  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
