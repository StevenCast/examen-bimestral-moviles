import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import {Storage} from "@angular/fire/storage"

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://gutendex.com';
  private robotUrl = 'https://robohash.org'

  constructor(private http: HttpClient, private firestore: Firestore) {}

  // Obtener la lista de Pokémon
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/?ids=1,2,3,4,5,6,7,8,9,10`);
                                          
  }


  getImageRobot(): Observable<any> {
    const random = this.generaNss
    return this.http.get(`${this.robotUrl}/${random}`);
  }

  private generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


 




}