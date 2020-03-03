import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private items = [];

  constructor(private httpClient: HttpClient) {
/*    this.HttpClient.get("./assets/todo.json")
      .subscribe((datos:any) => this.items = datos);*/
  }

  getItems():Observable<any> {
    return this.httpClient.get("./assets/todo.json");
  }
}
