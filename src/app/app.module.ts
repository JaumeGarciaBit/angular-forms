import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';

import { HeaderComponent } from './header/header.component';
import { Form01Component } from './forms/form01/form01.component';
import { Form02Component } from './forms/form02/form02.component';
import { Form03Component } from './forms/form03/form03.component';
import { Form04Component } from './forms/form04/form04.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Form01Component,
    Form02Component,
    Form03Component,
    Form04Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatIconModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
