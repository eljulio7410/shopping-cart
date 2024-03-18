import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable({
    providedIn: 'root',
  })
  export class CatalogService {
    readonly products: Product[] = [
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
        name: 'Monitor',
        price: 199.99,
      },
    ];
    constructor() {}
  }