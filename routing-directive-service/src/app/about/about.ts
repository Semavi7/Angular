import { Component, inject } from '@angular/core';
import { Aboutlist } from "../aboutlist/aboutlist";
import { FormsModule } from '@angular/forms';
import { Example } from '../service/example';

@Component({
  selector: 'app-about',
  imports: [Aboutlist, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
   ex = inject(Example) 

  // constructor(public ex: Example){}

}
