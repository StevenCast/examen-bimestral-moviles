import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private apiUrl = 'https://gutendex.com';
  private dogApiUrl = 'https://dog.ceo/api/breed'
  private robotUrl = 'https://robohash.org'

  constructor(private http: HttpClient) {}

  // Obtener la lista de Pokémon
  getBooks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/books/?ids=1,2,3,4,5,6,7,8,9,10`);
                                          
  }


  // Obtener detalles de un Pokémon por nombre o ID
  getImageDog(name: string): Observable<any> {
    return this.http.get(`${this.dogApiUrl}/${name}/images/random`);
  }


  getImageRobot(name:(string)): Observable<any> {
    return this.http.get(`${this.robotUrl}/${name}`);
  }

  


}