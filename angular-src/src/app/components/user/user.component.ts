import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  posts:Posts[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
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

    this.dataService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
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

  deleteHobby(index) {
    this.hobbies.splice(index , 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street:string,
  city:string,
  state:string
}

interface Posts {
  id:number,
  title:string,
  body:string,
  userId:number
}
