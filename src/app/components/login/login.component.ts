import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string ='';
  password: string = '';
  error: string = '';

  constructor(private router: Router){}
  login(){
    if(this.username === 'admin' && this.password === 'admin'){
      this.router.navigate(['/home']);
    }
    else {
     this.error ='Invalid username or password';
    }
  }
}
