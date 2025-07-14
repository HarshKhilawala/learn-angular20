import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-example',
  imports: [],
  templateUrl: './signal-example.html',
  styleUrl: './signal-example.css'
})
export class SignalExample {

  studentName = signal<string>("Harsh");
  rollNo = signal<number>(18);

  firstName = "Harsh";
  lastName = "Khilawala";
  studentID = "19DCS053";

  computedSignal = computed(()=> this.studentName() + " - " + this.rollNo());

  constructor(){
    setTimeout(() => {
      this.studentName.set("Harsh Khilawala");
    }, 5000);

    setTimeout(()=>{
      this.studentID = "hk77205n";
    },5000);

  }

}
