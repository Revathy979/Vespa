import { Component, OnInit } from '@angular/core';
import { userReceipt } from 'src/app/models/userReceipt';
import { HttpClient } from '@angular/common/http';
import { ReceiptsService } from 'src/app/receipts.service';

@Component({
  selector: 'app-receiptslist',
  templateUrl: './receiptslist.component.html',
  styleUrls: ['./receiptslist.component.css']
})
export class ReceiptslistComponent implements OnInit {
  public userData: userReceipt = null;
  public DataToBeSearched:string;
  constructor(private http: HttpClient,private receiptService:ReceiptsService) { }
  public search(event) {

    this.receiptService.getReceipts(this.DataToBeSearched).subscribe(res => {
      console.log(res);
      this.userData = res;

    },
      error => {
        console.log("hai i am error", error);
      }
    );
    // this.http.get<userReceipt>("http://iteamone.online/rest/api/v1/receipts/?name=" + this.DataToBeSearched).subscribe(res => {
    //   console.log(res);
    //   this.userData = res;

    // },
    //   error => {
    //     console.log("hai i am error", error);
    //   }
    // );
  }
  // public search():any{

  //  alert("I am Searching");

  //   console.log("I am Searching");

  // }



  // constructor(){
  //   this.userData = [
  //     new userReceipt("Saravana", "7,kkm nagar", 200),
  //     new userReceipt("Saravana", "7,kkm nagar", 200),
  //     new userReceipt("Saravana", "7,kkm nagar", 200),

  //   ]


  // }

  ngOnInit() {
  }

}
