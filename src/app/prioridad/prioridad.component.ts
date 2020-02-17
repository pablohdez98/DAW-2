import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-prioridad',
  templateUrl: './prioridad.component.html',
  styleUrls: ['./prioridad.component.scss']
})
export class PrioridadComponent {

  @Input() prioridad=0;
  @Output() nuevaPrioridad = new EventEmitter();

  voto(number: number) {
    this.prioridad+=number;
    this.nuevaPrioridad.emit(this.prioridad);
  }

}
