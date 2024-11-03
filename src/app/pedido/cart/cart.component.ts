import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from './card';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item);
  }

  getTotal() {
    return this.cartService.getTotal();
  }

  fecharPedido() {
    // Implemente a lógica para enviar o pedido para o backend
    // Use o serviço HTTP para fazer uma requisição POST para salvar o pedido no backend
    // Exemplo:
    // this.http.post('http://localhost:8080/api/pedido', { items: this.cartItems })
    //   .subscribe(response => {
    //     console.log('Pedido salvo:', response);
    //     this.cartService.clearCart(); // Limpa o carrinho após salvar o pedido
    //   });
  }

  
}
