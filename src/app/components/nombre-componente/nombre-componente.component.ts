import { ICurrency } from './../../interfaces/currency.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/nombre-servicio.service';


@Component({
  selector: 'app-nombre-componente',
  templateUrl: './nombre-componente.component.html',
  styleUrls: ['./nombre-componente.component.css']
})
export class NombreComponenteComponent {

  divisas : ICurrency[] = [];
  coin1!: ICurrency;
  coin2! : ICurrency;
  quantity!: number;
  result!: number;
  select: 1 | 2 = 2;

  constructor (private apiService : ApiService) {}

ngOnInit(): void{
    this.apiService.getData().then((data)=> {
      this.divisas = data;
      this.coin1 = this.divisas[0];
      this.coin2 = this.divisas[1];
    });
  }

  Convert(): void {
    this.result = (this.quantity * this.coin1.unit) / this.coin2.unit;
  }

  Change(): void {
    [this.coin1, this.coin2] = [this.coin2, this.coin1];
    this.select = this.select === 1 ? 1 : 2;
    this.result = 0;
  }

}
