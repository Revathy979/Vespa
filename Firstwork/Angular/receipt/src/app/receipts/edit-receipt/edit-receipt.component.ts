import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userReceipt } from 'src/app/models/userReceipt';
import { ReceiptsService } from 'src/app/receipts.service';
import { ToastrService } from 'src/app/toastr.service';

@Component({
  selector: 'app-edit-receipt',
  templateUrl: './edit-receipt.component.html',
  styleUrls: ['./edit-receipt.component.css']
})
export class EditReceiptComponent implements OnInit {
  public receipt: userReceipt = new userReceipt(null, "", "", null);
  public getId() {
    let id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.edit.editReceipt(id).subscribe(res => {
      this.receipt = res;
    },
      error => {
        console.log("Invalid!!!");

      });
  }
  public saveReceipt() {
    this.edit.updateReceipt(this.receipt).subscribe(res => {
      this.receipt = res;
      this.toastr.toastr();
      console.log(res);
    },
      error => {
        console.log("Invalid!!!");
        console.log(error);
      });


  }

  constructor(private route: ActivatedRoute, private edit: ReceiptsService, private toastr: ToastrService) {
    this.getId();
  }

  ngOnInit() {
  }

}
