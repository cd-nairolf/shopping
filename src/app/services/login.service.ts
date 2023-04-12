import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false

  onLogin(): void {
    this.isLoggedIn = true
  }

  onLogout(): void {
    this.isLoggedIn = false
  }
}
