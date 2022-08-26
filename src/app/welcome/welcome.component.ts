import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  Header = 'Hi Everyone Welcome to Platosys';
  Header1 = 'We providing best websites with industry standards';
  constructor() { }

  ngOnInit(): void {
  }

}
