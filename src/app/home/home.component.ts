import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { BannerComponent } from "../banner/banner.component";
import { ListComponent } from "../pastel/list/list.component";
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../pedido/cart/cart.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CartComponent, RouterOutlet, BannerComponent, MenuComponent,ListComponent,LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
}
