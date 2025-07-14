import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})

export class Forms {

  userForm : FormGroup = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
  });

  onSubmit() {
    const formValue  = this.userForm.value;
    console.log(formValue);
  }

}
