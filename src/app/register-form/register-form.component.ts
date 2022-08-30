import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  @ViewChild('userForm') uf:NgForm

  setpatchvalue(){
    this.uf.form.patchValue({
      'firstname':'vivek',
      'lastname':'G',
     'email':'vivekluck^@gmail.com'
    })
  }
  constructor() {

   }
  ngOnInit(): void {
   this.setpatchvalue()
  }
  onsummit(data:NgForm){
    console.log(data)
  }

}
