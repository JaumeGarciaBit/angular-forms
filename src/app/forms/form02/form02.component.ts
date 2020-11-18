import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/classes/user';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html',
  styleUrls: ['./form02.component.scss']
})
export class Form02Component implements OnInit {
  hide = true;
  placeholders={
    username:'type your user name',
    userpass:'type your password'
  }
  user:User = new User();
  constructor() {
    console.log(this.user.username);
    console.log(this.user.password);
  }

  ngOnInit(): void {
  }

  createUser(form){
    this.user.username = form.controls.username.value;
    this.user.password = form.controls.userpass.value;
    this.user.adress = form.controls.adress.value;
  }

}
