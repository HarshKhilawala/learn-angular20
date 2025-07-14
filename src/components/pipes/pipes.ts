import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  imports: [SlicePipe, DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, JsonPipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes {

  studentName = "harsh khilawala";
  currentDate = new Date();
  rollNoList = [1,2,3,4,5,6,7,8];
  studentDetails = {
    "name": "harsh",
    "roll no": 18,
  };

}
