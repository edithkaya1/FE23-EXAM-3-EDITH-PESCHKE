import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsModel} from '../shared/products.model';
import {product} from '../shared/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  product:ProductsModel;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {
   let id = parseInt(this.route.snapshot.params['id']);
   this.product = product[id]; 
  }
 
  addToCart(){
    this.cartService.onAddToCart(this.product);
    alert("the item added to your cart");
  }
}
