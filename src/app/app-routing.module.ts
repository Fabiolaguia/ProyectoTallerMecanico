import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import { CreateVehiculoComponent } from './components/create-vehiculo/create-vehiculo.component';
import { ListVehiculosComponent } from './components/list-vehiculos/list-vehiculos.component';
import {LoginComponent} from "./components/login/login.component";
import {OlvidoPasswordComponent} from "./components/olvido-password/olvido-password.component";
import {RegistrarseComponent} from "./components/registrarse/registrarse.component";
import {OrdenReparacionComponent} from './components/orden-reparacion/orden-reparacion.component';
import { CitasComponent } from './components/citas/citas.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'list-vehiculos' , component:ListVehiculosComponent},
  {path: 'createVehiculo', component: CreateVehiculoComponent},
  {path: 'editVehiculo/:id', component: CreateVehiculoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reset-password', component: OlvidoPasswordComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'profile', component: RegistrarseComponent},
  {path: 'editUser', component: RegistrarseComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'editVehiculo/:id', component: CreateVehiculoComponent},
  {path: 'orden-reparacion', component: OrdenReparacionComponent},
  {path: 'citas', component: CitasComponent},
  {path: '**', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
