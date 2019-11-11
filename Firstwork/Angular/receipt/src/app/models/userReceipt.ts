export class userReceipt{
    id:number;
    name:string;
    address:string;
    amount:number;

    constructor(id:number,name:string,address:string,amount:number){
        this.id=id;
        this.name=name;
        this.address=address;
        this.amount=amount;

    }
}
// export interface userReceipt{
//     id:number;
//     name:string;
//     address:string;
//     amount:number;
// }