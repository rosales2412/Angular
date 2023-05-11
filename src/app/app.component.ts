import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/nombre-servicio.service';

interface Divisa {
  value: string;
  viewValue: string;
  rate: number;
}

interface Divisas2 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


   constructor() { }



}
