import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-olvido-passwoed',
  templateUrl: './olvido-password.component.html',
  styleUrls: ['./olvido-password.component.scss']
})
export class OlvidoPasswordComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
