import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Movie } from "./movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService{

  private moviesUrl: string = 'http://localhost:3100/api/movies';

  constructor(private httpClient: HttpClient){}

  retrieveAll(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.moviesUrl);
  }

  retrieveById(id: number): Observable<Movie>{
      return this.httpClient.get<Movie>(`${this.moviesUrl}/${id}`);
  }

  // ANY - Espera qualquer tipo objeto no retorno
  deleteById(id: number): Observable<any>{
      return this.httpClient.delete<any>(`${this.moviesUrl}/${id}`);
  }


  save(movie: Movie): Observable<Movie>{
    if(movie.id){
      return this.httpClient.put<Movie>(`${this.moviesUrl}/${movie.id}`, movie);
    }else{
      return this.httpClient.post<Movie>(`${this.moviesUrl}`, movie);
    }
  }
}


var MOVIES: Movie[] = [
  {
      id: 1,
      name: 'shrek',
      imageUrl: '/assets/img/03.jpg',
      price: 10.00,
      room: 'CS-1',
      duration: 154,
      date: '01/02/2002', /*MM/dd/yyyy */
      rating: 5,
  },
  {
    id: 2,
    name: 'bee-movie',
    imageUrl: '/assets/img/05.jpg',
    price: 10.00,
    room: 'CS-1',
    duration: 154,
    date: '01/02/2002',
    rating: 5,
  },
  {
    id: 3,
      name: 'todo mundo em pânico',
      imageUrl: '/assets/img/01.jpg',
      price: 15.00,
      room: 'AB-1',
      duration: 180,
      date: '01/02/2020',
      rating: 4,
  },
  {
    id: 4,
      name: 'o preço do amanhã',
      imageUrl: '/assets/img/02.jpg',
      price: 20.00,
      room: 'BA-1',
      duration: 210,
      date: '02/02/2020',
      rating: 4.5,
  },
  {
    id: 5,
    name: 'rocket League: O filme',
    imageUrl: '/assets/img/04.jpg',
    price: 10.00,
    room: 'CJ-1',
    duration: 154,
    date: '01/02/2002',
    rating: 1.5,
  },
  {
    id: 5,
    name: 'kung-Fu Panda',
    imageUrl: '/assets/img/06.jpg',
    price: 25.00,
    room: 'CJ-1',
    duration: 200,
    date: '01/02/2002',
    rating: 3,
  }
];
