import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BannerComponent } from "./banner/banner.component";
import { MenuComponent } from "./menu/menu.component";
import { CartComponent } from './pedido/cart/cart.component';
import { ListComponent } from './pastel/list/list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone:true,
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginComponent, MenuComponent, BannerComponent, ListComponent]
})
export class AppComponent {
  title = 'pizzaria';
}
