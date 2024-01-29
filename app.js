//array
/*let fruits= ['mango','orange','apple','berry','banana']
//array destructuring(es6)
console.log (fruits[1])*/

//objects
/*let hirani={
    fullname:'Hirani Trupti',
    age:18,
    color: 'Brown',
    //function inside an object as a property is called a method
    hello:function(){
        console.log("hello")
    }
}
console.log (hirani.hello())*/

//functions
/*function fullname(){
    console.log (" my fullname is Trupti Hirani")
}s
fullname()*/

/*let fname="Trupti"
let sname="Mahesh"
let lname="Hirani"
let age=18

console.log(`my name is ${fname} second name is ${sname} last name is ${lname} and my age is ${age}`)*/

/*function fullname(firstname,lastname,age,education){

    console.log(`my name is ${firstname} ${lastname}  my age is ${age} and my education is ${education}`)
}
fullname("trupti","hirani",18,"highschool")*/

/*function sum(firstnumber,secondnumber,thirdnumber){

    console.log(`sum of ${firstnumber} + ${secondnumber} + ${thirdnumber}`)
}
sum(18,21,32)*/

/*function sum(firstnumber,secondnumber,thirdnumber){
    let fourthnumber = firstnumber + secondnumber + thirdnumber

    console.log(`the sum of all numbers is ${fourthnumber}`)
}
sum(32,29,67)*/

/*function areaofcircle(radius){
    let pi=3.146
    let area=pi*radius*radius
    console.log(`the area of circle is ${area}`)


}
areaofcircle(163)*/

//array
/*let fruits=['mango','banana','orange','apple']
let firstfruit= fruits[0]
fruits[3]='orange';

console.log(firstfruit,fruits)*/

//object
/*let car={
    make:'model',
    model:'new model',
    year:2018,
    hybrid:'false',
    colors:['black','blue','silver'],
    methods:['drive','stop'],

    hello:function(){
        console.log("hello")
    },
     stop(){
        console.log("stop")
     }
}
console.log(car.make)
console.log(car.colors[0])
car.hello
car.stop*/

/*function calculateTotal(subTotal,tax){
    let total=subTotal + tax
    console.log(`${total}`)
}
calculationTotal(22000,3200)

    let order1=2500
    let order2=900
    let order3=780
    console.log(`${order1} + ${order2} + ${order3}`)*/

    /*let firstname= "Trupti"
    let lastname= "Hirani"
    let age=18
    if(age >=18){
        console.log('you are an adult')
    }
    else{
        console.log('you are a child')

    }*/

   /* let firstname ='hirani'
    
    let age=18
    if(age==18 && firstname =="hirani"){
        console.log(`you have passed the test`)
    }
else{
    console.log(`you have failed the test`)
}*/

/*let person1={
    firstname :'Trupti',
    age:19,
    status:'resident'
}; 
let person2 ={
    firstname: 'Hirani',
    age:14,
    status:'tourist'
};
if(person2.age>=18 && person2.status ==="resident"){
    console.log(`cast a vote`)
}
else{
    console.log(`not eligible`)
}
*/
/*let dice = 6
switch(dice){
    case 1:
        console.log('you got one')
        break;
        case 2:
            console.log('you got two')
            break;
            case 3:
                console.log('you got three')
                break;
                case 4:
                    console.log('you got four')
                    break;
                    case 5:
                        console.log('you got five')
                        break;
                        case 6:
                            console.log('you got six')

}*/

//loops

/*for(let i=0; i<=5;i++){
    console.log(`the value of the numbers are` +" "+ i)

}
let person={
    fname:'Trupti',
    lname:'Hirani',
    age:18


}*/

/*let person1={
    fname:'Trupti',
    age:16,
    Status:'tourist'
};
let person2={
    fname:'Hirani',
    age:32,
    status:'resident'
};
if(person2.age>=18 && person2.status === "resident"){
    console.log(`cast a vote`)
}
else{
    console,log(`not eligible`)

}*/

/*let company={
    brandname:'adidas',
    year:1990,
    location:'UK',
    fname:'Trupti',
    lname:'Hirani',

    hello:function(firstname, lastname){
        console.log(`good morning ${firstname}  ${lastname}`)
    }

}
console.log(company.hello('tupti','hirani'))*/

//callback function
/*function one(){
    console.log(`how are you doing`)
}
//higher order function
    function two(names,cb){
        
        console.log(`how are you Mr.${names}`)
        cb()
    }
two("Hirani",one)*/

//array methods( map,filter, reduce, foreach)
//foreach(does not return a new array,accepts a callback function,anonymously)
/*let employee=[
    {fname: 'hirani',age:18, salary:5000, school:'ics'},
    {fname: 'trupti',age:25, salary:2500, school:'maseno'},
    {fname: 'khushi',age:32, salary:9000, school:'moi'},
    {fname: 'joe',age:17, salary:10000, school:'kabarak'}
  
]
//callback function
function names(eachname){
    console.log(eachname.fname.toUpperCase())
}
//high order function
let all=employee.forEach(names)*/

/*let employee=[
    {fname:'Hirani', age:24,school:'ics',gender:'female'},
    {fname:'Trupti',age:32,school:'kabarak',gender:'female'},
    {fname:'Joe',age:23,school:'moi',gender:'male'},
    {fname:'Mark',age:18,school:'maseno',gender:'male'},
    {fname:'John',age:16,school:'ics',gender:'male'}
]
  function names(eachname){
    console.log(eachname.fname)
  }
let all=employee.forEach(names)*/

//map(returns a new array,does not change the size of the original)
/*const school=[
    {location:'eldoret',population:500,schoolName:'ics'},
    {location:'nairobi',population:1500,schoolName:'maseno'},
    {location:'nakuru',population:5100,schoolName:'kabarak'},
    {location:'kakamega',population:1000,schoolName:'moi'},
]
//callback function
function names(eachname){
    console.log(eachname.location)
    return location
}
//high order function
let all=school.forEach(names)*/

//for loop
/*for (let i=1; i<=5;i++){
    console.log(i);
    for (let j=1; j<=3;j++)
    console.log("inner loop + j")
}*/
/*let day=7
switch (day) {
    case 0:
      day = "Sunday";
      console.log(`sunday`)
      break;
    case 1:
      day = "Monday";
      console.log(`monday`)
      break;
    case 2:
       day = "Tuesday";
       console.log(`tuesday`)
      break;
    case 3:
      day = "Wednesday";
      console.log(`wednesday`)
      break;
    case 4:
      day = "Thursday";
      console.log(`thursday`)
      break;
    case 5:
      day = "Friday";
      console.log(`friday`)
      break;
    case 6:
      day = "Saturday";
      console.log(`saturday`)
      default:
        console.log(`it is weekend!!!`)
  }*/

  /*function calculateTotal(subTotal,tax){
  //let total= subtotal+tax;
 //return total;
  return subTotal+tax
};
console.log(calculateTotal(22000,320))
let order1=calculateTotal(2100,100);
let order2=calculateTotal(5000,200);
let order3=calculateTotal(6000,500);

console.log(order1,order2,order3)*/

//filter(returns based on the condition)
//returns a new array and can manipulate the size of the new array unlike map
/*const person=[
    {location:'eldoret',population:500,schoolName:'ics'},
    {location:'nairobi',population:1500,schoolName:'maseno'},
    {location:'nakuru',population:5100,schoolName:'kabarak'},
    {location:'kakamega',population:1000,schoolName:'ics'},
]
let eachperson= person.filter(function(people){
    if(people.schoolName==="maseno"){
        return people
    
    }    
})
console.log(eachperson)*/

//find method(is good in returning unique values)
//incase of multiple values,the first value is returned

/*const person=[
    {fname: 'hirani',age:18, salary:5000, school:'ics',id:1},
    {fname: 'trupti',age:25, salary:2500, school:'maseno',id:5},
    {fname: 'khushi',age:32, salary:9000, school:'moi',id:5},
    {fname: 'joe',age:17, salary:10000, school:'kabarak',id:4}
]

    let eachperson= person.find(function(people){
        if(people.id===5){
            return people
        
        }    
    })
    console.log(eachperson)*/

    //assignment : reduce array method(single value,array,object)
    //returns a single array,object,number
    //accumulator----is the total sum of items you are adding up
    //iterator----current item within an array in which we are adding to the accumulator
    //index----index of each item within an array
    //currentarray----current array in which we are iterating from
/*const item=[
    {name:'bike',price:1000},
    {name:'tv',price:10000},
    {name:'album',price:500},
    {name:'book',price:200},
    {name:'phone',price:20000},
    {name:'computer',price:10000}
]
let total= item.reduce(function(currentTotal, item){
    return item.price + currentTotal
},0)
console.log(total)*/

//Dom-Documant object model
//getelementbyid
//getelementbytagname
//getelementbyclassname
//queryselector
//queryselectorAll

const heading=document.getElementById('hirani')
console.log(heading)


//dom in javascript




  












