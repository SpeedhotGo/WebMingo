import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { LoginComponent } from './components/login/login.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DisplayPostComponent } from './components/display-post/display-post.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginComponent,
    UserPostComponent,
    DisplayPostComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
