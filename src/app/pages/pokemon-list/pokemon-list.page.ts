import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import {doc, Firestore, setDoc, docData } from '@angular/fire/firestore';
import {Storage, uploadString, ref, getDownloadURL} from "@angular/fire/storage"

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit {
  books: any[] = [];
  loading = false;
  filteredBooks: any[] =[];
  pokemonDetails: any = null;
  randomImageRobot: string | null = null;
  
  constructor(private pokemonService: PokemonService, private storage: Storage, private firestore: Firestore) {}



  ngOnInit() {
    this.fetchBooks();  
  }

  fetchBooks() {
    this.loading = true;
    this.pokemonService.getBooks().subscribe({
      next: (response) => {

        this.books = response.results;
        this.filteredBooks = [...this.books];
        this.loading = false;

        console.log(this.books)
      },
      error: (error) => {
        console.error('Error fetching Books:', error);
        this.loading = false;
      },
    });
  }



  getRobots(){
    this.loading = true;
    this.pokemonService.getImageRobot().subscribe({
      next: () => {
        const random = this.generaNss()
        this.randomImageRobot = `${this.pokemonService["robotUrl"]}${random}`;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching Dogs:', error);
        this.loading = false;
      },
    });
  }


  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


async saveInfo(book:string, url:string){
  const storageRef  = ref(this.storage)
  try{
    await uploadString(storageRef,book, "base64")
    const imageUrl = await getDownloadURL(storageRef)
    const setDocRef = doc(this.firestore, book);
    await setDoc(setDocRef,{
      url
    })
    return true
  }catch(error){
    return null
  }
}




}