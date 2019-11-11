import { Component, OnInit } from '@angular/core';
import { userRegistration } from 'src/app/models/userRegistration';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/toastr.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  public regData: userRegistration=new userRegistration("","","");
  constructor(private authservice: AuthService,private router:Router,private toastr:ToastrService) { }

  public registerUser(){
    console.log("In userRegister()");
    this.authservice.registerUserData(this.regData).subscribe(res=>{
      console.log("registered successfully");
      this.toastr.regToastr();
      this.router.navigate(['/receipts/login'])

    },
    error=>{
      console.log(error);
      console.log("Invalid!!!");
    }
    );
  }

  ngOnInit() {
  }

}
