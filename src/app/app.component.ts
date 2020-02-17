import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Lista de DAW's";
  model = {
    user: 'Daw',
    items: [
      {id: "aaaaabbbbb", action: "zestudiar daw", done: false, prioridad: 4},
      {id: "bbbbbccccc", action: "ayudar a mami", done: false, prioridad: 3},
      {id: "cccccddddd", action: "ver Netflix", done: true, prioridad: 8},
      {id: "dddddeeeee", action: "recoger", done: false, prioridad: 2},
    ]
  };
  mostrarTodas=true;

  constructor() {

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
}
