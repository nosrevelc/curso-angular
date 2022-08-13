import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  size = 40
  color = '#EC026F'
  fonte = 'sans-serif'
  classes = ['titulo-verde','fonte-italica']
  piscar = 'piscar'

  constructor() { }

  ngOnInit(): void {
  }

}
