import { AppPipeModule } from '../shared/pipe/app-pipe.module';
import { StarModule } from '../shared/component/star/star.module';
import { primeiraMaiuscula } from '../shared/pipe/replace.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieInfoComponent } from './movies-info.component';
import { MovieListComponent } from './movies-list.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieInfoComponent,
    primeiraMaiuscula,
  ],
  imports: [
    StarModule,
    AppPipeModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'movies', component: MovieListComponent
      },
      {
        path: 'movies/info/:id', component: MovieInfoComponent
      }
    ])
  ]
})
export class MovieModule {

}
