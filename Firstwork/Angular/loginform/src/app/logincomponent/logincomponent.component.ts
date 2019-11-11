import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_alert';

@Component({
  selector: 'app-logincomponent',
  templateUrl: './logincomponent.component.html',
  styleUrls: ['./logincomponent.component.css']
})
export class LogincomponentComponent implements OnInit {

  constructor(private alertService : AlertService) { }
  success() {
    this.alertService.success("Successfully Logged In");
  }


  ngOnInit() {
  }

}
