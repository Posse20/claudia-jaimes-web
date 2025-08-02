import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

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

  constructor(){}

  onSubmit(){
    const body = {
      title: 'Formulario de contacto',
      name: this.form.username + ' ' + this.form.lastname,
      email: this.form.email,
      message: this.form.message,
      phone: this.form.phone
    };
    console.log('form', body);
    emailjs.send('service_zb6hrgz', 'template_5n3irqf', body, 'yjS-1mMOYrnmYGp7N')

  }

}
