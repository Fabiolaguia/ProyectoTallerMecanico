import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/firestore";
import {User} from "../../clases/user";
import {UsuarioService} from "../../services/usuario.service";


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('',[Validators.required, Validators.minLength(2)]),
      phone: new FormControl('',[Validators.required, Validators.minLength(7)]),
      address: new FormControl('',[Validators.required]),
      ci: new FormControl('',[Validators.required, Validators.minLength(7)]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)]),
    });

  }

  async onSubmit(){
    const usuario = this.user.value;
    //this.usuarioService.createUser();
    const identificador = await this.authService.SignUp(usuario.email, usuario.password);
      const user: User = {
        uid : identificador,
        name: usuario.name,
        lastName: usuario.lastName,
        phone: usuario.phone,
        address: usuario.address,
        ci: usuario.ci,
        role: "cliente"
      };
      this.usuarioService.createUser(user);

    /**/

    console.log(identificador);

  }

}
