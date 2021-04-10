import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credenciales: FormGroup = new FormGroup({});
  constructor(
    public authService: AuthService
  ) {  }

  ngOnInit(): void {
    this.credenciales = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8)])
    });
  }

  async login(){
    let usuario = this.credenciales.value;
    this.authService.SignIn(usuario.email,usuario.password);

  }
}
