import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Renklendir } from '../renklendir';
import { Validate } from '../validate';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Renklendir, Validate],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(
    private router: Router
  ){}
  signin() {
    this.router.navigateByUrl("/");
  }

  
}
