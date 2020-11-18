import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-form03',
  templateUrl: './form03.component.html',
  styleUrls: ['./form03.component.scss']
})
export class Form03Component implements OnInit 
{
  hide = true;

  placeholders={
    username:'type your user name',
    userpass:'type your password',

    adress:"type your adress",
    bio:"add a bio",
    birthday:"select your birthday",
    gender:"type your gender",
    country:"type your country",
    phone:"enter your phone number",
    fullname:"type your full name",
  }

  user:User = new User();
  createUser(form){
    this.user.username = form.controls.username.value;
    this.user.password = form.controls.userpass.value;
    this.user.adress = form.controls.adress.value;

    this.user.bio = form.controls.bio.value;
    this.user.birthday = form.controls.birthday.value;
    this.user.gender = form.controls.gender.value;
    this.user.country = form.controls.country.value;
    this.user.phone = form.controls.phone.value;
    this.user.fullName = form.controls.fullname.value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
