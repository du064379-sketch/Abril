let age = prompt("Enter your age:",15);
alert("You are " + age + " years old.");
let res=confirm("Eres mayor de edad?");
if(res) {
    alert("You are an adult.");
} else {
    alert("You are not an adult.");
}
alert(Number("12345  "));// 12345
alert(Number("12345gt  "));// nan
alert(Number(true));//1
alert(Number(false));//0

alert(Boolean(1));// true
alert(Boolean(0));// false

alert(Boolean("hello"));// true
alert(Boolean(""));;// false