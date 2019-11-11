import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userName:string="Dhivya"
  constructor(private authService:AuthService, private router:Router, private http:HttpClient) { }
  
  public doLogOut(){
    console.log("logout");
    this.authService.logOut().subscribe(success => {
      if (success) {
        this.router.navigate(['/receipts/login']);
      }
      else {
        console.log("error");
      }
    });
    return false;
  }

  


  ngOnInit() {
  }

}
