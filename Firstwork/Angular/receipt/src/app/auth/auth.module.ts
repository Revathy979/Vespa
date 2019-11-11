import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LayoutModule } from '../layout/layout.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent, RegisterPageComponent],
  imports: [
    LayoutModule,
    RouterModule,
    FormsModule,
    CommonModule
  ],
  exports:[LoginComponent, RegisterPageComponent]

})
export class AuthModule { }
