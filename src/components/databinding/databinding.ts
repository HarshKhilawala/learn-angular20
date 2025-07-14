import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  courseName: string = "Angular 20";
  studentName: string = "Harsh";
  inputType: string = "checkbox";
  age: number = 18;
  
  
  onButtonClick(){
    this.courseName = "Angular 20 tutorials";
    alert("Course name changed.");
  }

  onTextChange() {
    this.age = 24;
    this.inputType = "text";
    alert("Age Change!");
  }


}
