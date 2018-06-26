import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class ExcepcionesService {
  constructor() {}
  handleError(error: HttpErrorResponse){
    
    let errMsg: string;
    if (error instanceof HttpErrorResponse) {      
      // Se produjo un error en el lado del cliente o en la red. Manejarlo en consecuencia.
      if(error.status==0){
        errMsg="No se pudo conectar intentelo de nuevo o mas tarde";
     }else{
        if((error.status>=500)&&(error.status<600)){
          errMsg="Error en el servidor. Intentelo más tarde";
        }       
     }    
    } else {
      // El servidor devolvió un código de respuesta fallido.
      // El cuerpo de respuesta puede contener pistas sobre lo que salió mal,
      /*if(error.status==404){
        errMsg="No se puede acceder a este sitio web";
      }else{
        errMsg=error.error.error;
      }*/
    }
    //alert(errMsg);
    return new ErrorObservable(errMsg);
  }
}
