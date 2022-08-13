import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string  = 'Cleverson';
  sobrenome = 'Vieira';
  cores = ['Amarelo','Azul','Verde','Roxo']
  pessoa = {
    nome:'Cleverson',
    idade : 47,
    peso: 115,
    altura:1.79
  }

  constructor() { }

  ngOnInit(): void {
  }

}
