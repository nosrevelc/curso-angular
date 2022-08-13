import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  @Input() userData! : {email: string; role: string}

  constructor() { }

  ngOnInit(): void {
  }

}
