import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { ListVehiculosComponent } from './components/list-vehiculos/list-vehiculos.component';
import { CreateVehiculoComponent } from './components/create-vehiculo/create-vehiculo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { LoginComponent} from "./components/login/login.component";
import { environment } from 'src/environments/environment';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { OlvidoPasswordComponent } from './components/olvido-password/olvido-password.component';
import {AuthService} from "./services/auth.service";
import { OrdenReparacionComponent } from './components/orden-reparacion/orden-reparacion.component';
import { CitasComponent } from './components/citas/citas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVehiculosComponent,
    CreateVehiculoComponent,
    NavbarComponent,
    HomeComponent,
    ContactoComponent,
    OrdenReparacionComponent,
    CitasComponent,
    LoginComponent,
    RegistrarseComponent,
    OlvidoPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule


  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
