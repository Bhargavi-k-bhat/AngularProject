import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userId:string = "Pathishav";
  password:string = "ABCDE123";
  givenUserId:string ;
  givenPassword:string;

  constructor(private routes : Router) { }

  ngOnInit(): void {
  }

  onClick()
  {
    if(this.userId==this.givenUserId && this.password == this.givenPassword)
    {
      Swal.fire("Login Successful!","User "+this.givenUserId +" is successfully logged in!",'success');
      this.routes.navigate(['/Home/'+this.givenUserId+' Admin']);
    }
    else
    {
      Swal.fire("Invalid Credentials!","Please enter valid User Id and Password!",'error');
      this.routes.navigate(['/Home']);
    }
  }

}
