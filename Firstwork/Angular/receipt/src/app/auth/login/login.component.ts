import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ToastrService } from 'src/app/toastr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email_id: any;
  public password: any;

  constructor(private authService:AuthService,private toastr:ToastrService,private router:Router) {}

  public authenticateUser() {
    let userCredential={
      email_id:this.email_id,
      password:this.password
    }
    console.log("In authenticateUser()");
    this.authService.loginData(userCredential).subscribe(res=>{
      console.log(res);
      this.authService.storeAuthToken(res['auth_token']);
      this.router.navigate(['/']);



    },
    error=>{
      console.log("Error:",error);
      // userCredential=null;   
      // console.log(userCredential);
      this.toastr.invalid();
    });

  }
  ngOnInit() {
  }

}
