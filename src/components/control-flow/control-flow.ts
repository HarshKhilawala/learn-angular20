import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {
  isVisible = false;
  age = 18;

  listItems = ["A", "B", "C", "D"];

  showVisible(){
    this.isVisible = true;
  }

  hideVisible(){
    this.isVisible = false;

  }
}
