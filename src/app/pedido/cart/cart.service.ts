import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './card';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Array para armazenar os itens do carrinho
  private cartItems: CartItem[] = [];

  // BehaviorSubject para emitir os itens do carrinho
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  // Observable público para acessar os itens do carrinho
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  // Adicionar um item ao carrinho
  addToCart(item: CartItem) {
    const existingItem = this.cartItems.find(cartItem => cartItem.nome === item.nome);

    if (existingItem) {
      existingItem.quantidade += 1;
    } else {
      this.cartItems.push({ ...item, quantidade: 1 });
    }

    this.cartSubject.next([...this.cartItems]); // Update with a new array to trigger change detection

  }

  // Obter todos os itens do carrinho
  getCartItems() {
    return this.cartItems;
  }

  // Obter o valor total do carrinho
  getTotal() {
    return this.cartItems.reduce((total, item) => total + (item.quantidade * item.precoUnitario), 0);
  }

  // Limpar todos os itens do carrinho
  clearCart() {
    this.cartItems = []; // Limpa o array interno
    this.cartSubject.next([...this.cartItems]); // Emite o array vazio
  }

  removeFromCart(item: CartItem) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.nome !== item.nome);
    this.cartSubject.next([...this.cartItems]);
  }

 
}
