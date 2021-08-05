import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* criar uma tag html - UM COMPONENTE*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IniciandoAngularTeste';

  name: String = 'Romulo';
}
