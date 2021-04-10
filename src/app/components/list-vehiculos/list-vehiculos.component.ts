import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-list-vehiculos',
  templateUrl: './list-vehiculos.component.html',
  styleUrls: ['./list-vehiculos.component.scss']
})
export class ListVehiculosComponent implements OnInit {

  vehiculos: any;
  
  constructor( private vehiculoServices: VehiculoService,
               private toastr: ToastrService) {

    
  }

  ngOnInit(): void {
    this.getVehiculos()
  }

  getVehiculos(){
    this.vehiculos = this.vehiculoServices.getVehiculosbyUser()

      /*.subscribe(data => {
      this.vehiculos = [];
      data.forEach((element:any) => {
        /!*console.log(element.payload.doc.data());*!/
        /!*console.log(element.payload.doc.id);*!/

        this.vehiculos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      console.log(this.vehiculos);
    })*/
  }

  eliminarVehiculo(id:string){
    this.vehiculoServices.eliminarVehiculo(id).then(() => {
      console.log('vehiculo eliminado con exito');
     /* this.toastr.error('El vehiculo se ha desactivado con exito','Desactivado',{
        positionClass: 'toast-bottom-right'});

      } ).catch(error =>
      console.log(error));*/
  })
  }
}
