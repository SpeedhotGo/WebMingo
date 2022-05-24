import { Component, OnInit } from '@angular/core';
import {Http , Headers } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Register_model } from '../../models/Register_model';
import { AccountService} from '../../../services/account.service';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  regi_Model: Register_model;
  errorMessage: string;
  errorBoolean: boolean = false;
  constructor(private accountService: AccountService, private router: Router, private http: Http) { }
  ngOnInit(): void {
    this.regi_Model = ({
      username: '',
      email: '',
      MobileNo: '',
      gender: '',
      password: '',
      content:'',
      postTitle:'', 
      postDesc:'', 
      postImageUrl:'', 
      userId:'', 
    } as unknown as Register_model);
  }

  Register(){    
    debugger;
    this.accountService.Adduser(this.regi_Model).then((response) => {
      debugger;
      alert(response.username +' successfully created' ) 
      this.router.navigate(['/login']);
  });
  
  
  }


}


