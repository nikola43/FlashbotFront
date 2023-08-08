import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideInAnimation } from '../route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //animations: [slideInAnimation],
})
export class AppComponent {

  constructor(private _router: Router) {
    this._router.navigateByUrl('/create-token')
  }
}