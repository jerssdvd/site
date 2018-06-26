import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'mapa.component.html'
})

export class MapaComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Output() infoCoordenadas: EventEmitter<any> = new EventEmitter<any>();
  locationChosen = false;
  constructor() { }

  ngOnInit() { }

  escogerUbicacion(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;
    this.infoCoordenadas.emit({lat: this.lat, lng: this.lng});
  }
}
