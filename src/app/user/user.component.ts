import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ServicesService } from '../services.service'

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
      'password':'vivek@123'
    })
  }
  constructor(private ser:ServicesService) { 
  }
  samplePutData={
    id:1,
    title:'update',
    body: 'this is a update method',
    userId:1
  }
  postData(){
    this.ser.postData(this.samplePutData).subscribe(sub=> {
      console.log('post data',sub)
    })
  }
  putData(){
    this.ser.putData(this.samplePutData).subscribe(sub=> {
      console.log('post data',sub)
    })
  }
  ngOnInit(): void {
    this.setuservalue()
  }
  onsummit(data:NgForm){
    console.log(data.form.value)
  }
}
