import { Component } from '@angular/core';
import { Example } from '../service/example';

@Component({
  selector: 'app-aboutlist',
  imports: [],
  templateUrl: './aboutlist.html',
  styleUrl: './aboutlist.css'
})
export class Aboutlist {
  constructor(public ex: Example){}

}
