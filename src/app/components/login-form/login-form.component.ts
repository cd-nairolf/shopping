import { Component } from '@angular/core'
import { NonNullableFormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service'
import { password } from 'src/app/utils/password.validator'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  errorMessage = ''

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', [Validators.required, password()]]
  })

  constructor(
    private router: Router,
    private loginService: LoginService,
    private fb: NonNullableFormBuilder) { }
  
    login(): void {
      this.loginService.onLogin()
      this.router.navigate(['home'])
    }
        
}
