import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import {Vehiculo} from "../clases/vehiculo";
import {User} from "../clases/user";


@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private firestore: AngularFirestore) { }

  agregarVehiculo(vehiculo: any): Promise<any>{
    return this.firestore.collection('vehiculos').add(vehiculo);
  }

  getVehiculosbyUser(): Observable<any>{
    // @ts-ignore
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    return this.firestore.collection('vehiculos',ref => ref.where('usuario', '==', usuario!.uid).orderBy('year','asc')).valueChanges({idField:"id"})

    //return this.firestore.collection('vehiculos', ref => ref.orderBy('year','asc')).snapshotChanges();
  }

  eliminarVehiculo(id:string): Promise<any>{
    return this.firestore.collection('vehiculos').doc(id).delete();
    
  }

  getVehiculo(id: string): Observable<any>{
    return this.firestore.collection('vehiculos').doc(id).snapshotChanges();
  }

  actualizarVehiculo(id: string, data:any): Promise<any>{
    return this.firestore.collection('vehiculos').doc(id).update(data);
  }

 
}
