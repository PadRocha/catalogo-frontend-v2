import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePDFComponent, HomeComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'pdf',
        component: CreatePDFComponent
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
