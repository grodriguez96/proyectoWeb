import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CompartidosModule} from './compartidos/compartidos.module'

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './compartidos/barra-navegacion/barra-navegacion.component';
import { environment } from 'src/environments/environment';
import {HttpClientModule} from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,    
    BarraNavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompartidosModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
