import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pastel } from './pastel.model';

@Injectable({
  providedIn: 'root'
})


export class PastelService {
  
  private apiUrl = 'http://localhost:8080/getpasteis';
  

  constructor(private http: HttpClient) { }

  getPasteis(): Observable<Pastel[]> {
    return this.http.get<Pastel[]>(this.apiUrl);
  }

 
}