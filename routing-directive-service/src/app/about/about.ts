import { Component, inject } from '@angular/core';
import { Aboutlist } from "../aboutlist/aboutlist";
import { FormsModule } from '@angular/forms';
import { Example } from '../service/example';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [Aboutlist, FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
   ex = inject(Example) 

  // constructor(public ex: Example){}


  todos:any[] = [];
  readonly #http = inject(HttpClient);

  constructor(){
    this.get();
  }

  async get(){
    var res = await lastValueFrom(this.#http.get<any[]>(""));
  this.todos = res;
  }

}
