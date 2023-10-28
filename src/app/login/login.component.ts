import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup , FormControl, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private _auth: AuthService , private _router: Router) {
    let controls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    }

    this.loginForm = this.fb.group(controls);

  }

  ngOnInit(): void {
  }

  login(){
    let user = this.loginForm.value;

    
    this._auth.login( user )
      .subscribe(
        {
          next: (res: any)=>{
            localStorage.setItem('token', res.token);
            this._router.navigate(['/dashboard']);
          },
          error: (err)=>{
           Swal.fire({
            title: 'email or pass invalid',
            icon: 'error'
           })
          }
        }
      )
    
  }

}
