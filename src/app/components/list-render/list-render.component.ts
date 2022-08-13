import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  i:number = 0

  animais: Animal[] = [
    {nome:'Lipi',tipo:'Cão',idade: 4},
    {nome:'Bommer',tipo:'Cão',idade: 5 },
    {nome:'Oli', tipo:'Iguana', idade: 3},
    {nome: 'Fly', tipo : 'Passaro',idade: 2},
  ];

  detalhesAnimal = '';

  constructor() { }

  ngOnInit(): void {
  }

  mostraIdade(animal: Animal){
    this.detalhesAnimal = `O pet ${animal.nome} tem ${animal.idade} anos.`
  }

}
