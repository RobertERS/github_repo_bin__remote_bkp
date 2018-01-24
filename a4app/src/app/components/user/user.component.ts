import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

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
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor ran ...');
  }

  ngOnInit() {
    console.log('ngOnInit ran ...');
    this.name = 'Robert Show';
    this.email = 'hello@test.com';
    this.age = 41;
    this.address = {
      street:'Ulanska',
      city:'Katowice',
      state:'Slaskie'
    },
    this.hobbies = ['Bicycling','Stroglift', 'New technology'];
    this.hello = "Yo Berety!";

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }
  
  onClick(){
    //console.log('Hello');
    this.name = "Janek";
    this.hobbies.push('Languages learning');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby)
    console.log(hobby);
    return false;
  }

  deleteHobby(hobby){
    for (let index = 0; index < this.hobbies.length; index += 1) {
      if (this.hobbies[index] === hobby) {
        this.hobbies.splice(index, 1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }

}

interface Address{
    street:string,
    city:string,
    state:string
}

interface Post{
  id:number,
  title:string,
  body:string
  userId:number
}
