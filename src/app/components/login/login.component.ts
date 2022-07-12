import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group( {
      email: ['',[Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  send():any{
    this.userService.login(this.formLogin.value)
      .then(response=>{
        console.log(response);
      })
      .catch(error=>{
        console.log('AAAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaAAAAA')
        console.log(error)
      })
  };

}
