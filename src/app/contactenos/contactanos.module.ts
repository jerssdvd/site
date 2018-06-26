
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { ContactanosService } from './services/contactanos.service';
import { MensajeErrorService } from '../core/mensajeError.service';
import { ExcepcionesService } from '../core/excepciones.service';
import { MatSnackBarModule, MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';




@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    MaterializeModule,
    RouterModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [ContactanosService,MensajeErrorService,ExcepcionesService],
 
})
export class ContactanosModule { }