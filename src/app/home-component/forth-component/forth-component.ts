import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forth-component',
  imports: [FormsModule],
  templateUrl: './forth-component.html',
  styleUrl: './forth-component.css'
})
export class ForthComponent {
  form = {
    username: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  };

  onSubmit(){
    console.log('form', this.form);
  }

}
