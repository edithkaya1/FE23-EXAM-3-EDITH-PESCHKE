import { Component } from '@angular/core';
import {ProductsModel} from '../shared/products.model';
import {product} from '../shared/product';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your order has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    // alert("the item was added to your cart");
    }
}
