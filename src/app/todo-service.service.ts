import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/database";
import {AngularFireAuth} from "@angular/fire/auth";
import {fromPromise} from "rxjs/internal-compatibility";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private items = [];

  constructor(private httpClient: HttpClient,
              private fdb:AngularFireDatabase,
              private fauth:AngularFireAuth) {
/*    this.HttpClient.get("./assets/todo.json")
      .subscribe((datos:any) => this.items = datos);*/

    this.fauth.authState.subscribe(
      (data) => console.log("logged in", data),
      (error) => console.log("Error en el login", error),
      () => console.log("auth complete")
    );
  }

  getItems():Observable<any> {
    return this.httpClient.get("./assets/todo.json");
  }

  getFireItems(): Observable<any> {
    return this.fdb.list('todo').valueChanges();
  }

  logIn() {
    return fromPromise(this.fauth.auth.signInWithEmailAndPassword("pablo@gmail.com","holaquetal"));
  }

  logOut() {
    this.fauth.auth.signOut();
  }
}
