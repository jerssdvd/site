import { Component, OnInit } from "@angular/core";
import { Empresa } from "./empresa.model";
import { ContactanosService } from "./services/contactanos.service";
import { MensajeErrorService } from "../core/mensajeError.service";
declare var Materialize: any;



@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  empresa: Empresa;
  lat: number = -4.007596384139128;
  lng: number = -79.20837874999995;
  updateMensaje: string;
  active: boolean = true;
  latlng: string;
  mensajeN: string;
  mensajeU: string;
  mensajeC: string;
  mensajeE: string;
  mensajeT: string;
  numeroValido:boolean=true;

  constructor(private enviarCorreo: ContactanosService,
    private msjError: MensajeErrorService) {
    this.empresa = { nombreEmpresa: '', email: '', telefono: '', direccion: '', latitud: '', longitud: '' }
  }
  ngOnInit(): void {
    
  }
  limpiarFormulario() {
    this.empresa = { nombreEmpresa: '', email: '', telefono: '', direccion: '', latitud: '', longitud: '' }
    this.active = false;
    setTimeout(() => { this.active = true; }, 0);
  }
  getCoordenadas(informacion) {
    this.lat = informacion.lat;
    this.lng = informacion.lng;
    this.enviarCorreo.obtenerGeoData(this.lat, this.lng).subscribe((respuesta: any) => {
      this.empresa.direccion = respuesta.display_name;
    })
  }
  mostrarNombre() {
    this.mensajeN = this.msjError.mostrarNombre(this.empresa.nombreEmpresa);
  }
  mensajesEmail() {
    this.mensajeE = this.msjError.mensajesEmail(this.empresa.email);
  }
  mensajesTelefono() {   
this.mensajeT = this.msjError.mensajesTelefono(this.empresa.telefono);
    

  }

  enviarDatos() {
    let empresa = {
      nombreEmpresa: this.empresa.nombreEmpresa,
      email: this.empresa.email,
      telefono: this.empresa.telefono,
      direccion: this.empresa.direccion,
      latitud: this.lat,
      longitud: this.lng,
    }
    console.log(this.empresa.direccion);
    if ((this.empresa.nombreEmpresa != "") && (this.empresa.email != "") && (this.empresa.telefono != "") && (this.empresa.direccion != "")) {
      this.enviarCorreo.enviarDatos(empresa)
        .subscribe(respuesta => {
          this.limpiarFormulario();
          Materialize.toast(respuesta['response'], 6000, 'rounded green')
        }, error => {
          
          this.limpiarFormulario();
          Materialize.toast(error, 6000, 'round red')
        })
    } else {
     
      this.updateMensaje = "Haga clic en el mapa para obtener la ubicacion de su empresa"
      Materialize.toast('<span>'+this.updateMensaje+'</span>', 6000, 'rounded red')

    }
  }

}