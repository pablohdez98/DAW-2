import {Component, OnDestroy} from '@angular/core';
import {TodoServiceService} from './todo-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  title = "Lista de DAW's";
  model = {
    user: 'Daw',
    items: []
  };
  mostrarTodas=true;
  suscripcion:Subscription;

  constructor(private todoService:TodoServiceService) {
    //this.model.items = todoService.getItems();
    this.suscripcion=todoService.getItems().subscribe((data:any)=>this.model.items=data);
  }

  TnIncompletas(){
    let count=0;
    if (this.model.items)
      this.model.items.forEach((item,index)=>!item.done? count++:true);
    return count;
  }

  addItem(tarea){
    let nuevoId=Math.random().toString(36).substr(2,10);
    this.model.items.push({id: nuevoId, action: tarea, done: false, prioridad: 2});
  }

  deleteItem(id: string) {
    this.model.items = this.model.items.filter( item => {
      return item.id != id;
    })
  }

  nuevaPrioridad($event: any,id) {
    let i= this.model.items.findIndex((item:any)=>item.id==id, id);
    this.model.items[i].prioridad=$event;
  }

  ordenaTareas(ascendente: boolean) {
    this.model.items = this.model.items.sort( (a, b) => {
      if(a.action.toLowerCase() == b.action.toLowerCase()) return 0;
      else {
        if(a.action.toLowerCase() > b.action.toLowerCase() && ascendente) return 1;
        else {return -1}
      }
    });
  }

  ordenaPrioridad (ascendente: boolean) {
    if (ascendente) {
      this.model.items = this.model.items.sort( (a, b) => (b.prioridad - a.prioridad));
    } else {
      this.model.items = this.model.items.sort( (a, b) => (a.prioridad - b.prioridad));
    }
  }

  ngOnDestroy(): void {
     this.suscripcion.unsubscribe();
  }
}
