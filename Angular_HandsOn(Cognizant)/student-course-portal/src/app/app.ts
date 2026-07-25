import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header';
import { Loading } from './services/loading';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {


  constructor(
    public loadingService: Loading
  ) {}


}