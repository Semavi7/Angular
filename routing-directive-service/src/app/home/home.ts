import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Renklendir } from '../renklendir';

@Component({
  selector: 'app-home',
  imports: [Renklendir],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    constructor(
      private router: Router
    ){}

    method(){
      this.router.navigate(["about"]);
      this.router.navigateByUrl("/about");
    }
}
