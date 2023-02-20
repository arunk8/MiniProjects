console.log('Hello World');
//alert('welcome, click ok');

var a=10;
console.log(a);
let b=a*2/3;
console.log(b);

var text = document.getElementById('id1').innerHTML;
document.getElementById('id1').innerHTML=20;
var text1 = document.getElementById('id1').innerText;
console.log(text);
console.log(text1);

//function 
function abc(){
    console.log('function abc');
    //alert('click okay');
    var name= prompt('Whats your name?');
    console.log('Hello '+ name);
}
//call
abc();


