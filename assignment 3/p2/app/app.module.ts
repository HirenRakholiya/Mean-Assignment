import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayDateDataComponent } from './display-date-data/display-date-data.component';
import { DisplayArrayValueListComponent } from './display-array-value-list/display-array-value-list.component';
import { DisplayArrayComboComponent } from './display-array-combo/display-array-combo.component';
import { DisplayTextboxComponent } from './display-textbox/display-textbox.component';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayDateDataComponent,
    DisplayArrayValueListComponent,
    DisplayArrayComboComponent,
    DisplayTextboxComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
