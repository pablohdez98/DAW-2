import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {PrioridadComponent} from './prioridad/prioridad.component';
import {OrdenaTareasPipe} from './ordenaTareas.pipe';
import { FiltroDonePipe } from './filtro-done.pipe';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';

@NgModule({
  declarations: [
    AppComponent,
    PrioridadComponent,
    OrdenaTareasPipe,
    FiltroDonePipe,
    CallbackHellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
