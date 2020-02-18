import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'callback-hell',
  templateUrl: './callback-hell.component.html',
  styleUrls: ['./callback-hell.component.scss']
})
export class CallbackHellComponent implements OnInit {

  private text: string = '';
  t: any;
  flickerApi: string;

  constructor() {
    this.flickerApi ="https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  }

  debounce() {
    if (this.t) window.clearTimeout(this.t);
    this.t = window.setTimeout(()=>{this.liveSearch();},1000)
  }

  tecla ($event: any) {
    this.text = $event.target.value;
    if (this.text.length < 4) return;
    this.debounce();
  }


  liveSearch() {
    $.getJSON(this.flickerApi,{
      tags: this.text,
      tagmode: "all",
      format: "json"
    }, this.respuesta)
  }

  respuesta(datos) {
    console.log(datos.items);
  }

  ngOnInit() {
  }

}
