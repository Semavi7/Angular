import { Component, inject } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  common = inject(Common)

  increment(){
    this.common.num++
  }
}
