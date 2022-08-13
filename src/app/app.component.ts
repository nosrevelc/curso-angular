import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "nosrevelc";
  userNameData = {
    email:'nosrevelc@nosrevelc.com',
    role: 'admin',
  }


  title = 'curso-angular';
}
