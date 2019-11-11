import { Component, OnInit } from '@angular/core';
import { userReceipt } from 'src/app/models/userReceipt';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.css']
})
export class GridviewComponent implements OnInit {
  public userData: userReceipt = null;
  
  constructor(private http: HttpClient) {
    this.http.get<userReceipt>("http://iteamone.online/rest/api/v1/receipts/").subscribe(res => {
      console.log(res);
      this.userData = res;

    },
      error => {
        console.log("hai i am error", error);
      }
    );
  }



  ngOnInit() {
  }

}
