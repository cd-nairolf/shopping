import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AuthenticationGuard } from './guards/authentication.guard'
import { HomeComponent } from './components/home/home.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginFormComponent },
  { path: 'home', canActivate: [AuthenticationGuard], component: HomeComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
