import { Injectable } from '@angular/core';
import {ProductsModel} from './shared/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : ProductsModel[] = []

  constructor() { }

  getProducts(){
    return this.cartItems
  }

  onAddToCart(buyProduct:ProductsModel){
    const existingProduct = this.cartItems.find((product)=>
      {
        return product === buyProduct;
      }
   )
   if(!existingProduct){
    this.cartItems.push(buyProduct);
   }else{
    existingProduct.quantity ++
   }
   
    console.log(this.cartItems);
    
  }

  getTotal(){
    let total = 0;
    this.cartItems.forEach(ele =>{
      total += ele.quantity * ele.price;
    })
    total = total * 1.1;
    return total 
  }

  getDiscount(){
    let discount = 0;
    let total1 = 0;
    this.cartItems.forEach(ele =>{
      total1 += ele.quantity * ele.price;
    })
    total1 = total1 * 1.1;
    if (total1 > 40){
      discount = total1 * 0.15;
    }
    return discount
  }

  onIncreaseQutty(index: number): void{
    this.cartItems[index].quantity ++;
  }

  onDecreaseQutty(index: number): void{
    if(this.cartItems[index].quantity > 0){
        this.cartItems[index].quantity --;
    }else{
      this.cartItems[index].quantity=1; 
      this.cartItems.splice(index, 1)
    }  
  }

  onDeleteItem(index:number): void{
    this.cartItems[index].quantity=1;
    this.cartItems.splice(index, 1)
  }
  
}
