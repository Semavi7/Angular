import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Renklendir } from '../renklendir';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Renklendir],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export default class Home {
    constructor(
      private router: Router,
      private _http: HttpClient
    ){
      this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: HttpErrorResponse) => {
          console.log(err)
        }
      });
      this._http.get("https://jsonplaceholder.typicode.com/todos/1").subscribe((res: any) => console.log(res));
    }

    method(){
      this.router.navigate(["about"]);
      this.router.navigateByUrl("/about");
    }

    logOut(){
      localStorage.removeItem("token");
      this.router.navigateByUrl("/login");
    }
}
