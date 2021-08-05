import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'] /*RECEBE UM ARRAY POIS PODE HAVER MAIS DE UMA FOLHA DE ESTILO*/
})
export class StarComponent implements OnChanges{

  @Input()
  rating: number = 0;
/* FAZ CRIAR UMA ATRIBUTO PARA A TAG APP-STAR*/


  starWidth: number = 0;

  ngOnChanges(): void{
    this.starWidth = this.rating * 74 / 5;
  }

}
