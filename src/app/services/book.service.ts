import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'https://gutendex.com';

  constructor(private http: HttpClient, private firestore: Firestore) {}

  // Obtener la lista de Pokémon
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/?ids=1,2,3,4,5,6,7,8,9,10`);                                          
  }

}