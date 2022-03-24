import { Injectable } from '@angular/core';
import { Cidade } from './cidade';
import { Pais } from './pais';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  getPaises(){
    return [
      new Pais(1, 'Brasil'),
      new Pais(2, 'USA'),
      new Pais(3, 'Itália')
    ];
  }

  getCidades(){
    return[
      new Cidade(1, 1,'São Paulo'),
      new Cidade(2, 1,'Brasília'),
      new Cidade(3, 1,'Rio de Janeiro'),
      new Cidade(4, 1,'Ceará'),
      new Cidade(5, 2,'New York'),
      new Cidade(6, 2,'Chicago'),
      new Cidade(7, 2,'Los Angeles'),
      new Cidade(8, 3,'Roma'),
      new Cidade(9, 3,'Florenza'),
      new Cidade(10, 3,'Veneza')
    ];
  }

  constructor() { }
}
