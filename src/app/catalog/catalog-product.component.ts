import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { Product } from './product';
import { mapProductToCartItem } from './helpers/map-product-to-cart-item.helper';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductComponent {
  @Input() product!: Product;
  constructor(
    private scService: ShoppingCartService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }

  navigateToProductDetails(): void {
    this.router.navigate(['products', this.product.id], {
      relativeTo: this.route,
    });
  }
}
