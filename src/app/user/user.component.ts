import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('userForms') uf:NgForm

  setuservalue(){
    this.uf.setValue({
      'firstname':'vivek',
      'password':'G'
    })
  }
  constructor() { 

  }
  ngOnInit(): void {
    this.setuservalue()
  }
  onsummit(data:NgForm){
    console.log(data)
  }

}
