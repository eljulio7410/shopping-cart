import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Product } from './product';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css']
})
export class CatalogProductComponent {
  @Input() product!: Product; 
  constructor(private scService: ShoppingCartService) {}

  addToCart(): void{
    const CartItem = mapProductToCartItem(this.product);
    this.scService.addItem(CartItem);
  }
}
