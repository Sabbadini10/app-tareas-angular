import { Component } from '@angular/core';
import { Tarea } from '../interfaces/tareas.interface';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  constructor(private tareasServices: TareasService){
  }

get tareas(){
  return this.tareasServices.tareas;
}

delete(tarea: Tarea){
  this.tareasServices.deleteTareas(tarea.tarea);
}

completed(tarea: Tarea){
this.tareasServices.completedTareas(tarea.tarea);
}

}
