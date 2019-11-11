"use strict";
exports.__esModule = true;
var first = /** @class */ (function () {
    function first() {
    }
    first.prototype.firstfn = function () {
        var msg = "All is well thats ends well:)";
        console.log(msg);
        var a = 10;
        var b = 1023;
        var c = a + b;
        var str3 = "Revathy";
        console.log(c + a);
        var str1 = "Welfare";
        var str2 = "Society";
        console.log(str1 + str2);
        console.log(typeof str1);
        console.log(typeof b);
        console.log(typeof str3);
    };
    first.prototype.secondfn = function () {
        var n = 10 > 0 ? "positive" : "negative";
        console.log(n);
    };
    return first;
}());
var second = /** @class */ (function () {
    function second() {
    }
    second.prototype.thirdfn = function (b, a) {
        return a;
    };
    second.prototype.fourthfn = function () {
        var result = this.thirdfn("Happy Morning Rey :)", 100);
        console.log(result);
    };
    return second;
}());
var const_class = /** @class */ (function () {
    function const_class(name) {
        this.name = name;
    }
    const_class.prototype.get_name = function () {
        console.log(this.name + " was born in Rameshswaram");
    };
    return const_class;
}());
// var fobj=new first();
// fobj.firstfn();
// fobj.secondfn();
// var sobj= new second();
// sobj.fourthfn();
var const_obj = new const_class("APJ Abdul Kalam");
const_obj.get_name();
