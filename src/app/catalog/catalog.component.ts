import { Component} from '@angular/core';
import { Product } from './product';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent{
  get products(): Product[] {
    return this.catalogService.products;
  }
  constructor(private catalogService: CatalogService) {}
  
}
