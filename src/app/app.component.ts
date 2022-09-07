import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UserForm';

  constructor(public router:Router)
  {

  }

  gotouser()
  {
    this.router.navigateByUrl('/user')
  }
  registerform()
  {
    this.router.navigateByUrl('/register-form')
  }
  appwelcome()
  {
    this.router.navigateByUrl('/welcome')
  }
  reactiveform()
  {
    this.router.navigateByUrl('/reactive')
  }
}
