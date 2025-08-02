import { HttpClient, HttpClientModule } from '@angular/common/http';
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

  constructor(private http: HttpClient){}

  onSubmit(){
    const body = {
      username: this.form.username + ' ' + this.form.lastname,
      email: this.form.email,
      phone: this.form.phone,
      info: this.form.message
    };
    console.log('form', body);

  }

}
