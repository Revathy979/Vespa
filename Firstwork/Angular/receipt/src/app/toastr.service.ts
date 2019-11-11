import { Injectable } from '@angular/core';
declare var toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() {

    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right",
      "preventDuplicates": true,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    }
  }
  public toastr(){
    toastr.success("Receipt added successfully");
  }
  public regToastr(){
    toastr.success("Welcome!Now You are the Member:)");
  }
  public invalid(){
    toastr.error("Email Id and Password Mismatch:(");
  }
}
