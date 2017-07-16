import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { CategoriesComponent } from './core/categories/categories.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { MyProfileComponent } from './core/my-profile/my-profile.component';
import { CartComponent } from './core/cart/cart.component';


const appRoutes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'cart', component: CartComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CategoriesComponent,
    AboutUsComponent,
    MyProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
