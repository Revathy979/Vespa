import { Component, OnInit } from '@angular/core';
import { ReceiptsService } from 'src/app/receipts.service';
import { userReceipt } from 'src/app/models/userReceipt';
import { ToastrService } from 'src/app/toastr.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public receipt: userReceipt = new userReceipt(9, "", "", 2927);

  constructor(private receiptService: ReceiptsService, private toastr: ToastrService) {

  }
  public dataToBeRegistered() {
    // let receipt = new userReceipt(10, "Saravana", "7,kkm nagar", 200);


    this.receiptService.createReceipt(this.receipt).subscribe(res => {
      alert("Successfully Saved:)")
      this.toastr.toastr();
      this.receipt = new userReceipt(0, "", "", 0);
      console.log(res);

    },
      error => {
        console.log('Invalid!!!');
      }
    );
  }

  ngOnInit() {
  }

}
