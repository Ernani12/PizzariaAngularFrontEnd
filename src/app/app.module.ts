import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule, NgFor } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './pedido/cart/cart.component';
import { ListComponent } from './pastel/list/list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';

@NgModule({
  
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RouterOutlet, 
    CommonModule,
    NgFor,
    BannerComponent,
    MenuComponent,
    CartComponent,
    ListComponent,
    LoginComponent,
    HomeComponent,  
    AppComponent
  ],
  exports: [RouterModule],
  providers: [provideHttpClient()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Adicione CUSTOM_ELEMENTS_SCHEMA aqui
  
})
export class AppModule { }