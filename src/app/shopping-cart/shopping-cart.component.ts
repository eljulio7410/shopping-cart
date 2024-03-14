import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems : CartItem[] = [
    {
      imageUrl: 'audifonos.jpg',
      name: 'Auriculares',
      price: 50,
    },
    {
      imageUrl: 'teclado.jpg',
      name: 'Teclado',
      price: 14.5,
    },
    {
      imageUrl: 'pantalla.jpg',
      name: 'Pantalla',
      price: 199.99,
    },
  ];
  get total():number{
    return this.cartItems.reduce((acc, {price}) => (acc += price),0)
  }

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(itemToDelete: CartItem):void{
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete)
  }

}
