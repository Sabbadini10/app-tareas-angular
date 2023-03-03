import { Injectable } from "@angular/core";
import { Tarea } from "../interfaces/tareas.interface";


Injectable()

export class TareasService {
  tareas : Array<Tarea> =
[
  {
    tarea: "Barrer",
    completada:false
  },
  {
    tarea: "Cocinar",
    completada:false
  },
   {
    tarea: "Ordenar",
    completada:false
  },
   {
    tarea: "Trapear",
    completada:false
  }
]


 deleteTareas(nombreTarea: string){
  this.tareas = this.tareas.filter(tarea => tarea.tarea !== nombreTarea)
}
}
