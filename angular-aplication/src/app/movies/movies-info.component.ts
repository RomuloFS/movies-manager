import { MovieService } from './movie.service';
import { Movie } from './movie';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
  templateUrl: 'movies-info.component.html',
})
export class MovieInfoComponent implements OnInit{

  movie: Movie;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit(): void{
        this.movieService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
          next: movie =>  this.movie = movie,
          error: err => console.log('Error', err)
        });
  }

  save(): void{
    this.movieService.save(this.movie).subscribe({
      next: movie => console.log('Saved with sucess', movie),
      error: err => console.log('Error', err)
    });
  }
}
