import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';

import { CatalogRoutingModule } from './catalog-routing.module';
import { ProductDetailsComponent } from './products-details/products-details.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, CatalogRoutingModule],
  exports: [CatalogComponent],
})
export class CatalogModule {}