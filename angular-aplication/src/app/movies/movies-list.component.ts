import { MovieService } from './movie.service';
import { Component, OnInit } from "@angular/core";
import { Movie } from "./movie";

@Component({
  /*selector para criar uma "TAG" */

  templateUrl: './movies-list.component.html'
})
export class MovieListComponent implements OnInit{

  _movies: Movie[] = [];

  _filterBy: string = '';

  filteredMovies: Movie [] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void{
    this.retrieveAll();
  }

  retrieveAll(): void{
      this.movieService.retrieveAll().subscribe({
      next: movies => {
        this._movies = movies;
        this.filteredMovies = this._movies;
      },
      error: err => console.log('Error', err)
    });
  }

  deleteById(movieId: number): void{
    this.movieService.deleteById(movieId).subscribe({
      next: () => {
        console.log('Deleted with sucess');
        this.retrieveAll();
      },
      error: err => console.log('Error', err)
    })
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredMovies = this._movies.filter((movie: Movie) => movie.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

  }

  get filter(){
    return this._filterBy;
  }


}
