import { environment } from './../environments/environment';
import { Injectable, Input } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Register_model } from 'src/app/models/Register_model';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  [x: string]: any;
  private adduserurl = environment.apiBaseUrl + 'api/auth/register';
  private Loginurl = environment.apiBaseUrl + 'api/auth/login';
  private UserDataurl = environment.apiBaseUrl + 'api/user/find/';
  private addposturl = environment.apiBaseUrl + 'api/post/userpost';
  private PostUpdateurl = environment.apiBaseUrl + 'api/post/';
  private Userpostgeturl = environment.apiBaseUrl + 'api/post/getpostdata';
  private DeletePosturl = environment.apiBaseUrl + 'api/post/';
 
 
  constructor(private baseHttpService: BaseHttpService) { }

  Adduser(register_model: Register_model){
    return this.baseHttpService.Post(this.adduserurl,register_model)
    .then(function(response){
        return response.json();
    });
  }
  Login(register_model: Register_model){
    return this.baseHttpService.Post(this.Loginurl,register_model)
    .then(function(response){
        return response.json();
    });
  }
  userdata( id:any): Promise<any>{
    return this.baseHttpService.Get(this.UserDataurl+id)
    .then(function(response){
        return response.json();
    });
  }

  AddPost(register_model: Register_model ){
    return this.baseHttpService.Post(this.addposturl,register_model)
    .then(function(response){
        return response.json();
    });
  }
  PostUpdateUser(register_model: Register_model ,id){
    console.log("<id>>>>>>",id);

    return this.baseHttpService.Put(this.PostUpdateurl+"/"+id,register_model)
    .then(function(response){
        return response.json();
    });
  }

  PostDataget(): Promise<any>{
    return this.baseHttpService.Get(this.Userpostgeturl)
    .then(function(response){
        return response.json();
    });
  }
  DeletePost( id:any): Promise<any>{
    return this.baseHttpService.Delete(this.DeletePosturl+id)
    .then(function(response){
        return response.json();
    });
  }
}

