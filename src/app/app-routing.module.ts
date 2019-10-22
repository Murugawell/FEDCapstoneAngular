import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { BarchartComponent } from './components/barchart/barchart.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';
import { ConfirmGuard } from './confirm.guard';
import { UsersComponent } from './components/users/users.component';
import { DevelopersComponent } from './components/developers/developers.component';



const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'addProduct', canActivate: [ConfirmGuard], canDeactivate: [ConfirmGuard], component: AddProductComponent },
      { path: 'profile', canActivate: [ConfirmGuard], component: ProfileComponentComponent },
      {
        path: 'viewProducts', component: ViewProductDetailsComponent,

      },
      { path: 'editProduct/:id', canActivate: [ConfirmGuard], component: EditProductComponent },
      { path: 'users', component: UsersComponent },
      { path: 'reports', component: BarchartComponent },
      { path: 'developers', component: DevelopersComponent }
      

    ]
  },
  { path: 'registration', component: RegisterComponent },
  { path: 'login', component: LoginComponent },




  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
