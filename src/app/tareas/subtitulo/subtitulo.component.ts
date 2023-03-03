import { Component } from '@angular/core';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-subtitulo',
  templateUrl: './subtitulo.component.html',
  styleUrls: ['./subtitulo.component.css']
})
export class SubtituloComponent {
constructor( private tareasServices: TareasService ){}

get tareas(){
  return this.tareasServices.tareas.length
}

}
