import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { DisplayPostComponent } from './components/display-post/display-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/Register', pathMatch: 'full' },
  { path: 'Register', component: FormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Post', component: UserPostComponent },
  { path: 'DisplayPost', component: DisplayPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
