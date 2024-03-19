import { ComponentFactory, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';

import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { ProductDetailsComponent } from './catalog/products-details/products-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'Catalog/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    
         NavDrawerComponent,
         
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    CatalogModule,
    ContactModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
