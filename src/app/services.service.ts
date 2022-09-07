import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 

  }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  postData(data:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',data);
  }
  putData(data:any){
    return this.http.put('https://jsonplaceholder.typicode.com/posts',data);
  }
  deleteData(data:any){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}
