import { runInThisContext } from "vm";

class first{
    firstfn(){
        var msg:string="All is well thats ends well:)"
        console.log(msg)
        var a:number=10
        var b:any=1023
        var c:number=a+b
        var str3:any="Revathy"
        console.log(c+a)
        var str1="Welfare"
        var str2="Society"
        console.log(str1+str2)
        console.log(typeof str1)
        console.log(typeof b)
        console.log(typeof str3)


    }
    secondfn(){
        var n=10>0?"positive":"negative"
        console.log(n)
    }
}
class second{
    thirdfn(b:string,a?:number){
        return a
    }
    fourthfn(){
        var result=this.thirdfn("Happy Morning Rey :)",100)
        console.log(result)

    }
}
class constclass{
    name: string;
    constructor(name:string){
        this.name=name
    }
   get_name(){
       console.log(`${this.name} was born in Rameshswaram`)
    }
}

var const_obj=new constclass("APJ Abdul Kalam")
const_obj.get_name();
var fobj=new first();
fobj.firstfn();
fobj.secondfn();
var sobj= new second();
sobj.fourthfn();





