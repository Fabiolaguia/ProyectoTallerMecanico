import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../clases/user";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.SignOut();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn
  }

  esMecanico(){
    let ls:string = String(localStorage.getItem("usuario"));
    let usuario:User = JSON.parse(ls);
    return usuario.role === "mecanico";
  }

  esCliente(){
    let ls:string = String(localStorage.getItem("usuario"));
    let usuario:User = JSON.parse(ls);
    return usuario.role === "cliente";
  }
  esAdmin(){
    let ls:string = String(localStorage.getItem("usuario"));
    let usuario:User = JSON.parse(ls);
    return usuario.role === "admin";
  }
  esGerente(){
    let ls:string = String(localStorage.getItem("usuario"));
    let usuario:User = JSON.parse(ls);
    return usuario.role === "gerente";
  }
}
