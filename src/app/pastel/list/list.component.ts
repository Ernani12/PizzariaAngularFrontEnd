import { Component } from '@angular/core';
import { PastelService } from '../pastel.service';
import { Pastel } from '../pastel.model';
import { CommonModule } from '@angular/common';
import {CartService} from '../../pedido/cart/cart.service'
import { CartItem } from '../../pedido/cart/card';
import { CartComponent } from "../../pedido/cart/cart.component";


@Component({
  selector: 'app-list',
  standalone:true,
  imports: [CommonModule,CartComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  cartItems: CartItem[] = []; // Array para armazenar os itens do carrinho

  pasteis: any[] = [];
  imagens: any[] = [
    'assets/imagens/carne.png',
    'assets/imagens/queijo.jpg',
    'assets/imagens/palmito.jpg',
    'assets/imagens/presuqueijo.jpg',
    'assets/imagens/vegetariano.jpg',
    'assets/imagens/tomate.jpg',
    'assets/imagens/milho.jpg',
    'assets/imagens/brocolis.jpg',
    'assets/imagens/doceleite.jpg'
  ];
  
  


  constructor(private pastelService: PastelService, private cartService: CartService) {}


  ngOnInit(): void {
    this.pastelService.getPasteis().subscribe(
      data => {
        this.pasteis = data.map((pastel, index) => {
          return {
            ...pastel,
          };
        });
      },
      error => {
        console.error('Erro ao carregar os pasteis', error);
      }
    );

  }
  

  addToCart(pastel: Pastel) {
    // Converte o objeto Pastel para um objeto CartItem
    const item: CartItem = {
      id: pastel.id,
      nome: pastel.nome,
      quantidade: 0, // Será atualizado no serviço
      precoUnitario: pastel.preco
    };

    this.cartService.addToCart(item); // Adiciona ao carrinho
  }


  getTotal() {
    return this.cartService.getTotal(); // Obtém o valor total do carrinho
  }

  clearCart() {
    this.cartService.clearCart(); // Limpa o carrinho
  }

  
}
