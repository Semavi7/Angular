import { Component } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public common: Common){}
}
