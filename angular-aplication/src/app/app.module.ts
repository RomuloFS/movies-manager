import { PageNotFoundComponent } from './page-not-found/404.component';
import { CoreModule } from './core/core.module';
import { MovieModule } from './movies/movie.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    MovieModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'movies', pathMatch: 'full'
      },
      {
        path: "**", component: PageNotFoundComponent
        /* página não encontrada - 404 NOT FOUND*/
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
