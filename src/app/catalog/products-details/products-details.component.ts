import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CatalogService } from '../catalog.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { mapProductToCartItem } from '../helpers/map-product-to-cart-item.helper';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | null;

  constructor(
    private catalogService: CatalogService,
    private scService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe( paramMap => {
    //   const productId = paramMap.get('id');
    // });

    const productId = this.route.snapshot.paramMap.get('id');
    this.product = this.catalogService.getProduct(Number(productId));

    if (this.product === null) {
      this.router.navigate(['catalog']);
    }
  }

  addToCart(): void {
    if (this.product === null) {
      return;
    }

    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }
}