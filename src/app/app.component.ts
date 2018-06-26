import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private iconRegistry: MatIconRegistry,private sanitizer: DomSanitizer){
  }
  firstName = "";
  selectedOption = "";
  selectedOptions = "";

  selectOptions = [];

  isTest5Checked = false;
  isTest6Checked = true;
  
  radioButtonValue = 3;

  maxLength = 20;
  autocompleteInit = {
    'data': {'Apple': null, 'Google': null},
    onAutocomplete: (val) => {
      console.log(val);
    },
  };

  isDisabled = false;
  onFileSelection(e) {
    console.log(e.target.files[0].name)
  }
  public ngOnInit(){
    window.setTimeout(()=>{
      this.selectOptions = [
        {value:1,name:"Option 1"},
        {value:2,name:"Option 2"},
        {value:3,name:"Option 3"}
      ]
    },100);
    this.iconRegistry.addSvgIcon(
      'icon-logo',        
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/logo.svg'));

    this.iconRegistry.addSvgIcon(
      'icon-nombre',        
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/nombre.svg'));

    this.iconRegistry.addSvgIcon(
      'icon-logoEmpresa',        
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/logoEmpresa.svg'));

    this.iconRegistry.addSvgIcon(
      'icon-iconosRedes',        
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/iconosRedes.svg'));

    this.iconRegistry.addSvgIcon(
      'icon-iconoLogo',        
    this.sanitizer.bypassSecurityTrustResourceUrl('assets/imagenes/LOGIN.svg'));
  }
  
}
