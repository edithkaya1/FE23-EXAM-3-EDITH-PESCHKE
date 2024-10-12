import { Component } from '@angular/core';
import {ProductsModel} from '../shared/products.model';
import {product} from '../shared/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: ProductsModel[] = product;

  constructor(private cartService:CartService){}

  addToCart(buyProduct:ProductsModel): void{
    this.cartService.onAddToCart(buyProduct);
    alert("the item was added to your cart");}
}
