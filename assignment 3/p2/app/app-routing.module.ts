import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayArrayComboComponent } from './display-array-combo/display-array-combo.component';
import { DisplayArrayValueListComponent } from './display-array-value-list/display-array-value-list.component';
import { DisplayDateDataComponent } from './display-date-data/display-date-data.component';
import { DisplayTextboxComponent } from './display-textbox/display-textbox.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path:'displayDate',
    component:DisplayDateDataComponent
  },
  {
    path:'arrayList',
    component:DisplayArrayValueListComponent
  },
  {
    path:'arrayCombo',
    component:DisplayArrayComboComponent
  },
  {
    path:'displayTextbox',
    component:DisplayTextboxComponent
  },
  {
    path:'userform',
    component:UserformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
