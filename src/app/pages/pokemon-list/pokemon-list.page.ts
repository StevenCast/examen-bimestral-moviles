import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

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
  nameDogs: any[]= [
    "appenzeller",
    "boxer",
    "borzoi",
    "havanese",
    "mix",
    "akita",
    "dalmatian",
    "dingo",
    "pitbull",
    "african",
  ]
  dogs: any[] = [];
  random = Math.floor(Math.random()*10)
  
  constructor(private pokemonService: PokemonService) {}



  ngOnInit() {
    this.fetchBooks();
    this.fetchRobots();
    // this.fetchDogs();
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

  // fetchDogs(){
  //   this.loading = true;
  //   this.pokemonService.getImageDog(this.nameDogs[this.random]).subscribe({
  //     next: (response) => {
  //       this.dogs = [response.message];      
  //       this.loading = false;
  //       console.log(this.dogs)
  //     },
  //     error: (error) => {
  //       console.error('Error fetching Dogs:', error);
  //       this.loading = false;
  //     },
  //   });
  // }

  fetchRobots(){
    this.loading = true;
    this.pokemonService.getImageRobot(this.generaNss.toString()).subscribe({
      next: (response) => {
        this.dogs = [response.message];      
        this.loading = false;
        console.log(this.dogs)
      },
      error: (error) => {
        console.error('Error fetching Dogs:', error);
        this.loading = false;
      },
    });
  }


  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}



  handleBusqueda(event: any){
    const query = event.target.value.toLowerCase();
    this.filteredBooks = this.books.filter((book)=> book.name.toLowerCase().includes(query));
    console.log(this.filteredBooks);
  
    this.loading = true;
    const name = (document.getElementById("buscarPokemon") as HTMLInputElement).value.trim().toLocaleLowerCase();
    
    this.pokemonService.getImageDog(name).subscribe({
      next: (details) =>{
        console.log(details);
        this.pokemonDetails = details
        this.loading = false;
      },
      error: (error)=>{
        console.log(error);
        this.loading = false;
      }
    })
  }

}