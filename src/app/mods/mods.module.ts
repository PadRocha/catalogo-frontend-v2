import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { AddKeyComponent, AddLineComponent, EditKeyComponent, EditLineComponent } from './pages';

@NgModule({
  declarations: [
    AddKeyComponent,
    AddLineComponent,
    EditKeyComponent,
    EditLineComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule
  ]
})
export class ModsModule { }
