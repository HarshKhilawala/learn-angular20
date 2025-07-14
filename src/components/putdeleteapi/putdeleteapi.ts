import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-putdeleteapi',
  imports: [],
  templateUrl: './putdeleteapi.html',
  styleUrl: './putdeleteapi.css'
})
export class Putdeleteapi {
  http = inject(HttpClient);
  postObj: any = {};

  onUpdate() {
    this.postObj = {
      "id":1,
      "title": "abc",
      "body": "xyz",
      "userId":1
    };

    this.http.put("https://jsonplaceholder.typicode.com/posts/1",this.postObj).subscribe({
      next: (result: any) => {
        alert("PUT Success!");
      },
      error: (err:any) => {
        alert("PUT Error - "+ err.error);
      } 
    });
  }

  onDelete() {
    this.http.delete("https://jsonplaceholder.typicode.com/posts/1").subscribe({
      next: (result: any) => {
        alert("DELETE Success!");
      },
      error: (err: any) => {
        alert("DELETE Error - "+ err.error);
      }
    });
  }
}
