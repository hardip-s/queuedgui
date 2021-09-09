import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
    loginForm: FormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
       // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  constructor() { }

  ngOnInit(): void {
  }

}
