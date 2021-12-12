import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  dadosUser = new FormGroup({
    login: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {}

  enviaLogin() {
    console.log(this.dadosUser.value);
    this.dataService
      .login(new User(this.dadosUser.value.login, this.dadosUser.value.senha))
      .subscribe((data) => {
        if (data) {
          console.log(data);
          localStorage.setItem('token', data);
          this.router.navigate(['home']);
        }
      });
  }
}
