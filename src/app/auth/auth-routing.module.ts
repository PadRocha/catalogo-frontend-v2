import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [LoginGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      { path: '**', redirectTo: 'login' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class AuthRoutingModule { }
