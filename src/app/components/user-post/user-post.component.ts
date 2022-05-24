import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Register_model } from 'src/app/models/Register_model';
import { AccountService } from 'src/services/account.service';
import { UiServiceService } from 'src/services/ui-service.service';
import jwt_decode from "jwt-decode";
import { Cookie } from 'ng2-cookies';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router, private http: Http ,public uISERVICE: UiServiceService) { }
useName:any
showPost:boolean = false;
TCtype: any;
TCdata1: any;
public Editor = ClassicEditor;
regi_Model: Register_model;

  ngOnInit(): void {
debugger;
    this.uISERVICE.userId = Cookie.get('UserUserId')
    if (Cookie.check("usersCookies")) {
      if (Cookie.get('UserUserId') != " ") {
        this.getDataFun()
      }
    } else {
      this.router.navigate(['/login']);
    }
  
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

  getDataFun(){
    this.accountService.userdata( this.uISERVICE.userId).then((response) => {
      this.useName = response.username
  });

  }

  addpost(){
    this.showPost = true
  }

  public onReady(editor) {
  debugger;
    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }

  AddPostUser() {
    debugger;
    this.regi_Model.userId =  this.uISERVICE.userId;
    this.regi_Model.postTitle =   this.regi_Model.postTitle.replace( /(<([^>]+)>)/ig, '');
    this.regi_Model.postDesc =    this.regi_Model.postDesc.replace( /(<([^>]+)>)/ig, '');
    this.regi_Model.postImageUrl =   this.regi_Model.postImageUrl;
    this.accountService.AddPost(this.regi_Model).then((response: any) => {
        debugger;
      this.router.navigate(['/DisplayPost']);
      });
  }

}
