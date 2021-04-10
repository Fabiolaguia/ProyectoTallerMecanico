import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "../clases/user";
import {flatMap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  createUser(usuario:User){
    this.firestore.collection("usuarios").add(usuario);
  }

  async getUsuario(uid:string) {
    console.log(uid);
      let usuario =  this.firestore.collection<User>('usuarios',ref => ref.where('uid', '==', uid).limit(1)).valueChanges({idField:"id"}).pipe(
        flatMap(users=>users)
      );
    usuario.subscribe(queriedItems => {
     localStorage.setItem("usuario", JSON.stringify(queriedItems));
    });
      console.log(usuario);


  }
}
