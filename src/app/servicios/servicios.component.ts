import {Component, EventEmitter, ViewChild} from "@angular/core"

import {MaterializeAction} from "angular2-materialize"

@Component({
    selector: 'app-servicios',
    templateUrl: './servicios.component.html',
    styleUrls: ['./servicios.component.css']
  })
  export class ServiciosComponent{
    @ViewChild('carousel') carouselElement; 
    actions = new EventEmitter<string>();
  
    imageURLs = [
      "assets/imagenes/servicio/servicio0.png",
      "assets/imagenes/servicio/servicio1.png",
      "assets/imagenes/servicio/servicio2.png",
      "assets/imagenes/servicio/servicio3.png",
      "assets/imagenes/servicio/servicio4.png",
      "assets/imagenes/servicio/servicio5.png",
    ];
  
    showInitialized = false;
  
    constructor() {
      // ejemplo de una forma hacky de agregar una imagen dinámicamente al carrusel
      window.setTimeout(() => {
        //this.imageURLs = [this.imageURLs[1], ...this.imageURLs]; // duplicar la primera iimagen
        this.carouselElement.nativeElement.classList.toggle("initialized")
        this.actions.emit("carousel");
      },2000);
    }
  }