import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  newUser ={
    name:'',
    phone_no:'',
    email:'',
    password:''
  };

  constructor(private userService:UserService){}

  submitUser(): void{
    this.userService.addUser(this.newUser).subscribe(() => {
      console.log('User added sucssefully');
      alert('User added sucssesfully');
      this.newUser ={
        name:'',
        phone_no:'',
        email:'',
        password:''
    
      };
    })
  }

}
