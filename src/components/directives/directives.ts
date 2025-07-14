import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgClass, NgStyle],
  templateUrl: './directives.html',
  styleUrl: './directives.css'
})
export class Directives {

  isVisible = true;

  toggleVisible(){
    this.isVisible = !this.isVisible;
  }

}
