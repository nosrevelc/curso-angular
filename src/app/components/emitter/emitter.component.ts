import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {

  meuNumber: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeNumber(){
    this.meuNumber = Math.floor(Math.random() * 10)
  }

}
