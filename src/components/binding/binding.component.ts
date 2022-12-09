import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
})
export class BindingComponent implements OnInit {
  phone = '9379992';
  user = {
    name: 'Joe',
    lastName: 'Doe',
  };

  boldText = `<b>I am  a bold text</b>`;

  login = '';
  password = '';

  constructor() {}

  get fullName() {
    return this.user.name + ' ' + this.user.lastName;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000);
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 1000000) + '';
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
  }

  onSubmit() {
    if (this.login && this.password) {
      alert(`You authorized as ${this.login} with password ${this.password}`);

      this.login = this.password = '';
      return;
    }
    alert('Login and password are required fields');
  }
}
