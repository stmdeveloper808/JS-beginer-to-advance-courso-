// aaj hum log padhne wale hai js 
//1 js  intudcation ✅
//2 word and kyword ✅
//3 compiler vs interpreter✅
//4 variabl and  typeof varible✅
//5 variable bante kaise hai and  console and  ✅
//6 funtion and who to create funtion and   typeof function and  function with peramiter ✅
//7 condition if else  and else if tarnari oprater ✅
//8 for loop and while loop ✅
//9 object ✅
//10 array  ✅

// 1 intudaction for js -- javascript 
// javascript ek interprayeter language hai or ese   1995 me brend each ne bnaya tha browser ke liye or 2.0 ke sath aaay tha

//2 word and keyword 
//word==>javascript me kisi word ka koi matlb na ho wo word hai 
//example ram the chacha apple my you  <=== inka koi matlb nhi hai js me yehi hai word 

//kyword==>keyword javascript me kisi word ka koi matlb hai wo word hai 
// example var let const if else <=== inka ka use hai js me yehi hai kyword 

// 3 interpreter vs compiler
// example  interpreter  ===> javascript ek interpreter languge hai or ye humare code ko line by line chalane ka kaam karta hai or interpreter apne code  byt code me convert karta hai or ye  convert jaldi hota hai or chalta slow hai  
// example compiler ===> compiler humare  dusre languege me gota hai jaise c c++ jaise language me hota hai or ye macin code me apne code ko convert karta hai or convert slow  hota hai or chalta fast hai

//4 variabl 
// js me kisi deta ko store krne ke lilye humlog variable ka use krte hai varible ek khali container jaisa hai jis me hum koi bhi deta store kar sakte hai 
// deta hota keya hai ===> example kisi game yaa kisi ka naame store karne ke liye humlog es use krete hai even future  me hum ese change and reset bhi ker sakte hai 

// 5 type of variables 
// js me 3type ke variable hai 1==> var let const 
// var ES5 version hai or ye  function scoped hai or ye  khud ko window pe add karta hai 
// let and const ye dono ES6 Version hai ye brasese scoped hai or ye khud ko window pe add nhi karta hai 

// 6 how to crete variable 
//1 var or ek name or name koi kyword nhi hona chahiye 
// example ==> 
    // var a = "satyam";  var name = 23;  
// let chacha = "hello"; 
// const ans = "hey"; 

// variable jis ki value badle wo variable hai 
// example  var a = "ram"; <==> var a = "rahul"; <==> let = name 12; let = name 20; es ki value change ho jayegi to ye variable hai 

// jis ki value na badle wo constaint hai 
// example  const ans  = "satyam"; <==> const ans = "jony"; ye likh ne pe hum erro dega or es ki value change nhi ho sakti hai 

//7 console.log(); hai keya ==> example console ko humare code ko print krne ka kaam karta hai yaa value ya erro print karne ke liye use karte hai 
/// console js ka part nhi hai console browser ka part hai or js hume browser me  jo window hai use leke deta hai or js me bahut aise proparty hai jo js ka part nhi hai 

//8 type of function js es5 me 3type ke funtion hai  
// example  1 function stament ==>jis ka koi naame ho bt wo kyword name nhi hona chahiye function name (){}
// example  1 function expression  ==> variable ka name hi fun ka name hota hai ===> var  name = function(){}
// example  1 annomus function  jis ka koi naam nhi hota hai wo annoums fun hota hai use me return kiya jata hai ==> function(){}

 // function with peramiter ==> agar humlog apne code ko vaise hi chalaye jais hum chahte hai lekin mujhe us code me thora change karna hoto hum funtion ke sath peramiter ko use karenge 
 // example ==>  function ans (a,b){
 // console.log("20"+a+b);
 // }
 // ans("year,old");


// js es6 me ek function or hai wo hai fat ()==>{} arrow function 2nd fat arrow function with peramiter
// exmple ==> 1 ek variable lo or use ek naam dedo wo naam kyword nahi hona chahiye ==> let myfun =()=>{
// console.log("hello world");
 // }
    // myfun();
// 2nd==> arrow  function bnao or ek fat ke under ek word store kr do jise call krete time acesse kiya ja sake 
// example ==> let god =(a)=>{
// console.log("kaise ,ho"+a);
    //}
   // chacha("bro");



   //7 condition if else  
   // 2ft example condistion ===> maine bola agar barshi hai to chata leke jao agar barish nhi hai to chata leke mat jao 
   // 2nd example condistion ====> maine kaha agar tumhar  age 20 ya 20 se jada hai to vote karo 
//   
// 1fst
// var  a = "barish";
//    if(a>barish){
// console.log("chata,leke,jao");
//    }else{
//     console.log("mat,leke,jao");
//    }

 // 2nd 
//  var  age = 20;
//    if(age>20){
// console.log("vote now");
//    }else{
//     console.log("sorry not complite your age");
//    }
// else if ===> ko tab hum use karte hai jab ek se jada conditions ho 
// var age = 20; 
//  if (age<22) {
//     console.log("are you muture");
    
//  }else if(age<17){
//  console.log("you are not muture");
//  }


//8 for loop and while loop

 // loop hai ky ==> hume jab kisi particuler code ko bar bar chala hota hai to hum loop ka use karte hai agar hume 10 ko 10bar print karana ho to hum loop ka use karenge 
 /// 2nd  computere ka janame hi esliye huaa tha ki jo insan ek kaam ko bar bar karte the to un se kai mistek ho jate the unhe thik karne ke liye comuter ko bnaya gya tha jo bina ruke bina gati kiye kai kaam ko rept karne ke liye computert ko bnaya gya tha
  // example ==> 1 2 3 4 5 6 7  ye rept ho raha hai 
   // example ==> 1 1 1 1 1 1   ye bhi rept ho raha hai 

   //  for loop == 
   // for loop hai ky===> forloop 0-start hota hai in me 3condition hai ==> start,end,change, 
   // example ===> jaise hume 1se 8 tak print karna hai ya kisi ka naam hume 8bar print krna hoto hum forloop ka use karenge
   
   //example ===>   for(let a=1; a<8; a++){
   //               console.log("a");
   //             }

   //  while lo 

   //example ==> whie loop ==> ka kaam hai tab tak chalo jab tak ek codition neet na ho jaye agar es ki value neet na hoto lagatar chalta hi rahega es liye hum while loop ko ek codition dete hai taki future me es ka condtion fuls ho jaye
//   

//9 object ===> hai ky 
// example ====> kisi ek man ka details objece jaise maan lo ke ladka hai or wo object hai maine use naam or age or phn no ek variable ke under store ka diye {} breses laga ke to wo ho object 
// example ==> hum ese blank object kaihte hai ===> let details ={}
// example ==>    var data = {
//                 name: "satyam",
//                age: 17,
//                no:183123,
//               }
//              console.log("deta");


//10 array ===> hai ky

//array ==> array ko hum tab use karte hai jab ek se jada value ko store karna ho tab hum array ka use karte hai or eska paihla no 0 se start hota hai 2nd no 1fst se count kiya jata hai 
// example ===>  let a = [] ese hum blank array kaihte hai 
/// let a = [1,2,3,4,5] 
