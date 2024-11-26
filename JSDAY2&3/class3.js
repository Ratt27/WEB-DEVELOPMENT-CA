let arr=[10,20,"Rattriz"];
console.log(typeof arr);
//object
//key:value
let obj={
    user_name:"rohit",
    account_number:6457292745,
    balance:420
}
console.log(obj);
//WHY WE ARE USING OBJECT?----->
//to store same data type together
let fun=function()
{
    console.log("hello coder army");
    return 10;
}
console.log(fun());
console.log(typeof fun);
//type conversion
let account_balance="10";
let num=Number(account_balance);
console.log(num);
console.log(typeof account_balance);
console.log(typeof num);
//Boolean to Number
let x= true;
console.log(Number(x));
let account="100xs";
console.log(Number(account));//output is NAN----->not a number
let ab=20;
console.log(typeof String(ab));
let ax=true;
console.log(String(ax));
let abc=""
console.log(Boolean(abc));//output will return true if anythinng is present wihtin the double quotes
console.log(20%3);//modulus give remember
let sum=20;
 let total=sum++
 console.log(total);
sum++//post increment
console.log(sum);
