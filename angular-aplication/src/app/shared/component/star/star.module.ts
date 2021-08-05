import { StarComponent } from './star.component';
import { NgModule } from "@angular/core";

@NgModule({
declarations:[
  StarComponent
],
/* EXPORTS - faz com que os modulos declarados possam ser utilizados como importações em outros modulos */
exports:[
  StarComponent
]

})
export class StarModule{

}
