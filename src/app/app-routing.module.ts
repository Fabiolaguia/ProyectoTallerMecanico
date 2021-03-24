import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVehiculoComponent } from './components/create-vehiculo/create-vehiculo.component';
import { ListVehiculosComponent } from './components/list-vehiculos/list-vehiculos.component';

const routes: Routes = [
  
  {path: 'list-vehiculos' , component:ListVehiculosComponent},
  {path: 'createVehiculo', component: CreateVehiculoComponent},
  {path: 'editVehiculo/:id', component: CreateVehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
