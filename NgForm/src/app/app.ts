import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  addModel = new Employess();
  updateModel = new Employess();
  employees: Employess[] = [];
  index: number = 0;
  isUpdateFormActive: boolean = false;

  constructor(
    private _date: DatePipe
  ){
    this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd');
  }

  save(form: NgForm){
    if(form.valid){
      this.employees.push(this.addModel);
      this.addModel = new Employess();
      this.addModel.startingDate = this._date.transform(new Date(), 'yyyy-MM-dd');
    }
  }

  get(model: Employess, index: number){
    this.index = index;
    this.updateModel = {...model};
    this.isUpdateFormActive = true;
  }

  cencel(){
    this.isUpdateFormActive = false;
  }

  update(form: NgForm){
    if(form.valid){
      this.employees[this.index] = this.updateModel;
      this.isUpdateFormActive = false;
    }
  }
}

class Employess{
  name: string = "";
  profession: string = "";
  startingDate: string | null = ""
}
