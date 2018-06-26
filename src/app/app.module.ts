import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { MatIconModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactanosComponent } from './contactenos/contactanos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MapaComponent } from './contactenos/mapa/mapa.component';
import { ContactanosModule } from './contactenos/contactanos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    ContactanosComponent,
    MapaComponent,
    ServiciosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterModule,
    ContactanosModule,
    HttpClientModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
