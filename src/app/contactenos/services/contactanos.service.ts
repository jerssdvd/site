import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import "rxjs/Rx";
import { Observable } from 'rxjs/Observable';
import { Empresa } from '../empresa.model';
import { ExcepcionesService } from '../../core/excepciones.service';
import { RUTAAPI } from '../../core/api';
import { Alert } from 'selenium-webdriver';


@Injectable()
export class ContactanosService {
    headers = new HttpHeaders();
    //format=string;
    constructor(private http: HttpClient, private errorServicio: ExcepcionesService) {
        this.headers.append("Content-Type", "application/json");
        //this.headers.append("Authorization","Bearer"+localStorage.getItem("token"));
    }
    enviarDatos(empresa): Observable<Empresa> {

        let url = `${RUTAAPI}formulario-contactenos/`;

        return this.http.post(url, empresa, { headers: this.headers })
            .map((response) => {
                return response;
            })
            .catch(error => {
                return this.errorServicio.handleError(error);
            })
    }
    public obtenerGeoData(lat, lng) {
        //return this.http.get('http://maps.google.com/maps/api/geocode/json?latlng='+latlng)
        return this.http.get('https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + lat + '&lon=' + lng)

    }
}
