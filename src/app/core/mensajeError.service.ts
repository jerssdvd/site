import { Injectable } from '@angular/core';

@Injectable()
export class MensajeErrorService {
    mensajeU: string;
    mensajeN: string;
    mensajeE: string;
    mensajeT: string;
    constructor() { }
    //Mostrar mensajes de error de username y nombre
    mostrarErrores(informacion) {
        let mensaje = "";
        if ((informacion.expresion1.test(informacion.valor[0])) == false) {
            mensaje = informacion.mensaje1;

        } else {
            if ((informacion.expresion2.test(informacion.valor)) && (informacion.valor.length > informacion.min)) {
                mensaje = "";
            } else {
                if (((informacion.expresion2.test(informacion.valor)) == false) && (informacion.valor.length > 1)) {
                    mensaje = informacion.mensaje2;
                } else {
                    if (informacion.valor.length <= informacion.min) {
                        mensaje = "Minimo 3 caracteres";
                    }
                }
            }
        }
        return mensaje;
    }
    mostrarNombre(nombre) {
        let informacionNombre = {
            valor: nombre,
            min: 2,
            expresion1: /^[a-zA-ZñÑ]$/,
            expresion2: /^[a-zA-ZñÑ]+[a-zA-Z0-9 ñÑáéíóúÁÉÍÓÚ]{1,30}$/,
            mensaje1: "El nombre inicia con letra",
        }
        this.mensajeN = this.mostrarErrores(informacionNombre);
        if (nombre == "") {
            this.mensajeN = "Este campo es requerido";
        }
        return this.mensajeN;
    }
    mensajesEmail(email) {
        this.mensajeE = "";
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.mensajeE = "";
        } else {
            this.mensajeE = "Email es invalido";
        }
        if (email == "") {
            this.mensajeE = "Este campo es requerido";
        }
        return this.mensajeE;
    }
    mensajesTelefono(telefono) {
        console.log(telefono)        
      
        if (telefono == ""){
            this.mensajeT = 'Este campo es requerido';
        }
            

        return this.mensajeT;
    }
    mensajeContrasena(password) {
        let contrasena = {
            mensajeC: '',
            barraContrasena: true
        }
        contrasena.mensajeC = "";
        if (password.length > 7) {
            contrasena.mensajeC = "";
            contrasena.barraContrasena = false;
        } else {
            contrasena.mensajeC = "Minimo 8 caracteres";
            contrasena.barraContrasena = true;
        }
        if (password == "") {
            contrasena.mensajeC = "Este campo es requerido";
        }
        return contrasena;
    }
}
