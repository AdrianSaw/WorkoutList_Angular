import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {WorkoutDataService} from './shared/http.service';


@Component({
  selector: 'app-root',
  template: `
  <app-navigation></app-navigation>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <router-outlet></router-outlet>
      </div>
    </div>
  </div>
  `
})

export class AppComponent implements OnInit {
  test = [];
  constructor(
    private httpService: WorkoutDataService) {

  }

  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBtR-lLpg5hYrHJAIOfiBoB0qlrvg8JT1U',
        authDomain: 'workout-app-ee5ef.firebaseapp.com'
    });
  }
}
