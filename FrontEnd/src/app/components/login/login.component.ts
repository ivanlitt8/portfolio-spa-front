import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  public formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserServiceService, private rout: Router) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group( {
      email: ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get Email(){
    return this.formLogin.get('email');
  }

  get Password(){
    return this.formLogin.get('password');
  }

  send():any{

    let datitos: {};

    this.userService.login(this.formLogin.value)
      .then(response=>{
        console.log('**----------**',response.user.uid);
        this.rout.navigate(['/portfolio']);
        datitos = JSON.stringify(response);
        console.log(datitos);
      })
      .catch(error=>console.log(error));
  };

}
