import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'src/app/home/home.component';
import { ViewCategoryComponent } from 'src/app/Category/view-category/view-category.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductShowComponent} from 'src/app/product-show/product-show.component'
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { LoginComponent } from 'src/app/login/login.component';
import { from } from 'rxjs';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'Home',component:HomeComponent},
  {path:'ViewCategory',component:ViewCategoryComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'ProductShowComponent/:parameter',component:ProductShowComponent},
  {path:'',component:HomeComponent},
  {path:'Checkout',component:CheckoutFormComponent},
  {path:'Login',component:LoginComponent},
  {path:'Home/:parameter',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
