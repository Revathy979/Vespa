import { Injectable } from '@angular/core';
import { userReceipt } from './models/userReceipt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceiptsService {

  constructor(private http:HttpClient) { }
  public getReceipts(name:string){
    return this.http.get<userReceipt>("http://iteamone.online/rest/api/v1/receipts/?name=" + name)
    
  }
  public createReceipt( receipt: userReceipt){
    console.log("CreateReceipts Called in service");
    return this.http.post("http://iteamone.online/rest/api/v1/receipts/",receipt)
    // alert("create receipts called"+userData);
  }
  public editReceipt(id:string){
    return this.http.get<userReceipt>("http://iteamone.online/rest/api/v1/receipts/" + id+"/")
    
  }
  public updateReceipt(receipt:userReceipt){
    return this.http.put<userReceipt>("http://iteamone.online/rest/api/v1/receipts/"+ receipt.id+"/",receipt);
  }
}
