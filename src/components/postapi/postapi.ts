import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-postapi',
  imports: [FormsModule],
  templateUrl: './postapi.html',
  styleUrl: './postapi.css'
})
export class Postapi {
  
  http = inject(HttpClient);
  
  postObj: any = {
    "title": "",
    "body": "",
    "userId" : 1
  }


  callPostAPI() {
    this.http.post("https://jsonplaceholder.typicode.com/posts", this.postObj).subscribe({
      next:(result: any)=>{
        console.log(result);
      }, 
      error:(error:any)=>{
        console.log(error.error);
      }
    });
  }
}
