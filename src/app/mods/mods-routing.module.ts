import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKeyComponent, AddLineComponent, EditKeyComponent, EditLineComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add/key',
        component: AddKeyComponent
      },
      {
        path: 'add/line',
        component: AddLineComponent
      },
      {
        path: 'edit/key',
        component: EditKeyComponent
      },
      {
        path: 'edit/line',
        component: EditLineComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
