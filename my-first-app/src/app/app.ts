import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentHome } from './component-home/component-home';
import { About } from './about/about';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentHome, About, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-first-app';
  value:string = "Hello World!"
  pClassName: string = "red"
  clickMe(){
    alert("beni tıkladın")
  }

  changeValue(event:any){
    this.value = event.target.value;
  }
}
