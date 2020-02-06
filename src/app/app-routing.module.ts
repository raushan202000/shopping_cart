import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path:'', redirectTo : 'signin' ,pathMatch : 'full' },
  { path:"home", component:HomeComponent},
  { path:"cart", component:CartComponent},
  { path:"Product",  component:ProductComponent},
  { path:"contact", component:ContactComponent},
  // { path:"book ", component:BookComponent},
  { path:"signin", component:SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
export const RoutingComponent=[ProductComponent,
                              SlidebarComponent,
                              CartComponent,
                              NavbarComponent,
                              HomeComponent,
                              SigninComponent,
                              ContentComponent,
                              ContactComponent,
                              BookComponent
                            ]
