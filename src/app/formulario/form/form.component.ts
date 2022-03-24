import { Component, OnInit } from '@angular/core';
import { Cidade } from './cidade';
import { DataserviceService } from './dataservice.service';
import { Pais } from './pais';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers : [DataserviceService]
})
export class FormComponent implements OnInit {

  paisSelecionado: Pais = new Pais(0, 'Brasil');
  paises: Pais[];
  cidades!: Cidade[];

  constructor(private _dataService: DataserviceService) { 
    this.paises = this._dataService.getPaises();
  }

  onSelect(id: number){
    this.cidades = this._dataService.getCidades().filter((item)=> item.paisid == id);
  }

  ngOnInit(): void {
  }

}
