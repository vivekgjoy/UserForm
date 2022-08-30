import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit 
{
  constructor() { }
  userForm:FormGroup

  ngOnInit(): void 
  {

    this.userForm = new FormGroup({

        'name' : new FormControl ('vivek'),
        'email' : new FormControl ('Vivek@gmail.com'),
        'password' :  new FormControl ('Vivek@123')
  })
  }
  setuservalue(){
    this.userForm.setValue({
      'name' : 'bala',
      'email' : 'bala@gmail.com',
      'password' : 'bala@123'
    })
  }
  onsubmit(){
    console.log(this.userForm)
  }
}

