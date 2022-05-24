import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Register_model } from 'src/app/models/Register_model';
import { AccountService } from 'src/services/account.service';
import { UiServiceService } from 'src/services/ui-service.service';
import jwt_decode from "jwt-decode";

import { Cookie } from 'ng2-cookies';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  regi_Model: Register_model;
  errorMessage: string;
  errorBoolean: boolean = false;
  constructor(private accountService: AccountService, private router: Router, private http: Http, public uISERVICE: UiServiceService) { }
  ngOnInit(): void {
    this.regi_Model = ({
      username: '',
      email: '',
      MobileNo: '',
      gender: '',
      password: '',
      content: '',
      postTitle: '',
      postDesc: '',
      postImageUrl: '',
      userId: '',
    } as unknown as Register_model);
  }

  Loginfun() {
    debugger;
    this.accountService.Login(this.regi_Model).then((response) => {
      debugger;
      Cookie.set('usersCookies', (response.accessToken));
      var token = response.accessToken;
      var decodedToken = jwt_decode(token);
      Cookie.set('UserUserId', decodedToken["id"]);
      this.uISERVICE.userId = Cookie.get('UserUserId')
      this.router.navigate(['/Post']);
    });
  }
}
