import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

import {doc, Firestore, collection, docData,addDoc } from '@angular/fire/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  books: any[] = [];
  loading = false;
  filteredBooks: any[] =[];
  pokemonDetails: any = null;
  randomImageRobot: string[] = [];
  


  constructor(private bookService: BookService, private firestore: Firestore, private alertController: AlertController) {}



  ngOnInit() {
    this.fetchBooks(); 
  }

  fetchBooks() {
    this.loading = true;
    this.bookService.getBooks().subscribe({
      next: (response) => {

        this.books = response.results.map((book:any)=>({
          ...book,
          robotImage: `https://robohash.org/${this.generaNss()}`
        }));
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

  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


  async saveInfo(){

    try {
      for(const libro of this.books) {
        const robotImage = `https://robohash.org/${this.generaNss()}`;

        // Crear un objeto con título e imagen
        const data = {
          title: libro.title,
          image: robotImage,
        };
        // Guardar el objeto en Firestore
        const librosCollection = collection(this.firestore, 'books');
        await addDoc(librosCollection, data)
        console.log('Libro guardado:', data);
      }
      
      const alert = await this.alertController.create({
        message: "Información almacenada con éxito",
        buttons: ["Aceptar"]
      });

      await alert.present();
      
    } catch (error) {
        
        console.error('Error al guardar en Firebase:', error);
      }
  }








}