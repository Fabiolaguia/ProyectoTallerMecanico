import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-create-vehiculo',
  templateUrl: './create-vehiculo.component.html',
  styleUrls: ['./create-vehiculo.component.scss']
})
export class CreateVehiculoComponent implements OnInit {
  createVehiculo: FormGroup;
  submitted = false;
  loading = false;
  id: string | null;
  titulo = 'Agregar Vehiculo';

  constructor(private fb: FormBuilder,
              private _vehiculoService: VehiculoService,
              private router: Router,
              private toastr: ToastrService,
              private aRoute: ActivatedRoute) { 
    this.createVehiculo = this.fb.group({
      modelo: ['', Validators.required],
      serial: ['', Validators.required],
      placa: ['', Validators.required],
      year: ['', Validators.required],
      fecha: ['', Validators.required]

    })
    this.id= this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarEditarVehiculo(){
    this.submitted = true;
    if(this.createVehiculo.invalid){
      return;
    }

    if(this.id===null){
      this.agregarVehiculo();
    }else[
      this.editarVehiculo(this.id)
    ]

    
    
  }

  agregarVehiculo(){
    const vehiculo: any = {
      modelo: this.createVehiculo.value.modelo,
      serial: this.createVehiculo.value.serial,
      placa: this.createVehiculo.value.placa,
      year: this.createVehiculo.value.year,
      fecha: this.createVehiculo.value.fecha,
      fechaRegistrada: new Date(),
      fechaActualizacion: new Date()

    }

    this.loading = true;

    this._vehiculoService.agregarVehiculo(vehiculo).then(()=>{
      this.toastr.success('El vehiculo fue registrado con exito','Vehiculo Registrado', {
        positionClass: 'toast-bottom-right'
      });
      this.loading = true;
      this.router.navigate(['/list-vehiculos'])

    }).catch(error =>{
      console.log('Error');
      this.loading = false;
    })

  }

  editarVehiculo(id: string){
    
    const vehiculo: any = {
      modelo: this.createVehiculo.value.modelo,
      serial: this.createVehiculo.value.serial,
      placa: this.createVehiculo.value.placa,
      year: this.createVehiculo.value.year,
    
      fechaActualizacion: new Date()

    }
    this.loading=true;
    this._vehiculoService.actualizarVehiculo(id, vehiculo).then(()=>{
      this.loading=false;
      /*this.toastr.info('El vehiculo fue modificado con exito','Vehiculo Modificado',{
        positionClass: 'toast-bottom-right'

      })*/
      this.router.navigate(['/list-vehiculos'])
    })

  }

  esEditar(){
    this.titulo ='Agregar Vehiculo'
    if(this.id !==null){
      this.loading = true;
      this._vehiculoService.getVehiculo(this.id).subscribe(data =>{
        this.loading = false;
        console.log(data.payload.data()['modelo']);
        this.createVehiculo.setValue({
          modelo:data.payload.data()['modelo'],
          serial:data.payload.data()['serial'],
          placa:data.payload.data()['placa'],
          year:data.payload.data()['year'],
          fecha:data.payload.data()['fecha']

          
        })
      })
    }
  }

}
 