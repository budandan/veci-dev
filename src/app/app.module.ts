import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './core/login/login.component';
import { CategoriesComponent } from './core/categories/categories.component';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { MyProfileComponent } from './core/my-profile/my-profile.component';
import { CartComponent } from './core/cart/cart.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { LendComponent } from './core/lend/lend.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'profile', component: MyProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
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
    CartComponent,
    PageNotFoundComponent,
    LendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
