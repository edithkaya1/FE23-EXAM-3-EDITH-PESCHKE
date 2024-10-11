import { Component } from '@angular/core';
import {ProductsModel} from '../shared/products.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  productsFromCart: ProductsModel[];
  total: number;
  constructor(private cartService: CartService) {
    this.productsFromCart = cartService.getProducts();
    console.log(this.productsFromCart);
    this.total = cartService.getTotal()
  }

  increaseQutty(index:number): void{
    this.cartService.onIncreaseQutty(index);
    this.calcTotal();
  }

  decreaseQutty(index:number): void{
    this.cartService.onDecreaseQutty(index);
    this.calcTotal();
  }

  deleteItem(index:number): void{
    this.cartService.onDeleteItem(index);
    this.calcTotal();
  }

  calcTotal(): void{
    this.total = this.cartService.getTotal()
  }

}
