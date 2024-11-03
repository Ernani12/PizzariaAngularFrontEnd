import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root'
})


export class PizzaService {
  
  private apiUrl = 'http://localhost:8080/getpizzas';
  

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.apiUrl);
  }

 
}