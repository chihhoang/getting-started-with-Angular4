import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() {
    console.log('constructor no-arg..');
    this.name = 'Jane Doe';
  }
  
  ngOnInit() {
    console.log('ngInit no-arg..');
    this.name = 'John Doe';
    this.age = 30;
    this.email = 'chi@gmail.com';
    this.address = {
      street: '20 Main St',
      city: 'San Jose',
      state: 'CA'
    }
    this.hobbies = ['code', 'walk', 'listen to music'];
    this.hello = {};
  }

  onClick() {
    this.name = 'Chi Hoang';
    this.hobbies.push('New hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i , 1);
      }
    }
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}
