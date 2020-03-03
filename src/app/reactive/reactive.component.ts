import {Component, OnDestroy, OnInit} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, switchMap} from 'rxjs/operators';
import {fromPromise} from "rxjs/internal-compatibility";

declare var $: any;

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit, OnDestroy {

  keyups: any;
  flickerApi ="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  suscripcion:Subscription;
  items: any;

  constructor() { }

  ngOnInit() {
    this.keyups = fromEvent($('#search'), 'keyup')
      .pipe(
        map((e:any) => e. target.value),
        filter(text => text.length > 3),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(searchTerm => {
          let promesa = $.getJSON(this.flickerApi,{
            tags: searchTerm,
            tagmode: "all",
            format: "json"
          });
          let observable = fromPromise(promesa);
          return observable;
        })
    );

    this.suscripcion = this.keyups.subscribe (
      (data:any) => this.items = data.items,
      (error:any) => console.log("error", error),
      () => console.log("completado")
    );

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }


}
