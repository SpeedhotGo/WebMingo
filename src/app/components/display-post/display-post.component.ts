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
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.scss']
})
export class DisplayPostComponent implements OnInit {
  PostData: any = [];
  useName: any
  showPostUpdate: boolean = false;
  viewdata: boolean = true;
  TCtype: any;
  TCdata1: any;
  public Editor = ClassicEditor;
  regi_Model: Register_model;
  postId: any;

  constructor(private accountService: AccountService, private router: Router, private http: Http, public uISERVICE: UiServiceService) { }


  ngOnInit(): void {
    this.uISERVICE.userId = Cookie.get('UserUserId')
    if (Cookie.check("usersCookies")) {
      if (Cookie.get('UserUserId') != " ") {
        this.getpostdataFun()
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
      content: '',
      postTitle: '',
      postDesc: '',
      postImageUrl: '',
      userId: '',
    } as unknown as Register_model);
  }





  getpostdataFun() {
    debugger;
    this.accountService.PostDataget().then((response) => {

      this.PostData = response;
      this.postId = response._id;
    });
  }


  editPost(title, dsc, imgurl, postid) {
    this.regi_Model.postTitle = title;
    this.postId = postid;
    this.regi_Model.postDesc = dsc;
    this.regi_Model.postImageUrl = imgurl;
    this.showPostUpdate = true;
    this.viewdata = false;


  }


  public onReady(editor) {

    editor.ui
      .getEditableElement()
      .parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );
  }


  UpdatePost() {
    this.viewdata = true;
    this.showPostUpdate = false;
    debugger;
    this.regi_Model.userId = this.uISERVICE.userId
    this.postId;
    this.regi_Model.postTitle = this.regi_Model.postTitle.replace(/(<([^>]+)>)/ig, '');
    this.regi_Model.postDesc = this.regi_Model.postDesc.replace(/(<([^>]+)>)/ig, '');

    this.accountService.PostUpdateUser(this.regi_Model, this.postId).then((response: any) => {
      debugger;
      this.getpostdataFun()
      this.router.navigate(['/DisplayPost']);
    });
  }

  DeleteUserPost(postid) {
    debugger;
    this.postId = postid
    this.accountService.DeletePost(this.postId).then((response: any) => {
      debugger;
      this.getpostdataFun()
      this.router.navigate(['/DisplayPost']);
    });
  }
}

