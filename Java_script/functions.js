function names()
{
    console.log('Abebe');
}
names();
function names()
{
return 'Abebe'}
console.log(names);

function add(a=80,b)
{
    return a + b

}
console.log(add(undefined,5));

function addAll()
{
    var t=0
    for(let i=0; i<arguments.length;i++)
    {
        t+=arguments[i]
    }
    return t;

}
console.log(addAll(2,3,4,5,6,6,5));
function findMax()
{
    var max=0
    var t
    for(let i=0; i<arguments.length;i++)
    { t=max;
        if(i>t)
        {
            max=arguments[i]
        }
    }
    return max;

}
console.log(findMax(2,3,4,5,6,9,5));

//function expression

var add=function(a,b)
{
    return a+b;

}
//arrow function 
var num;
var add=(num)=> a+b
console.log(add(2,3))

var evenOdd=(a,b)=>
{
    if(num%2===0)
    {
        return even
    }
    else
    {
        return odd
    }
}
console.log(evenOdd(10))

//Callback parameter

function fname(a)
{
    return'My full name is: '+ a
}

function fullName(callback, a, b)
{
    return callback(a) + ' ' + b
}
console.log(fullName(fname,'Abebe', 'Alemu'));

function add(a, b)
{
    return a+b;
}
function sub(a, b)
{
    return a-b;
}
function mul(a, b)
{
    return a*b;
}
function div(a, b)
{
    return a/b;
}
function calculator(callback, a, b)
{
    return callback(a,b)


}
console.log(calculator (2,4,(a,b)=>a*b));

//functions and objects

var person=
{
    fName: 'Abebe',
    lName: 'Alemu',
    age:80,

    fullName:function()
    {
        return this.fName + ' ' + this.lName
    }
}
var t= 'fName'
console.log(person.fName);
console.log(person[t]);
console.log(person.fullName());
console.log(person);

function animal(name, sound, height, type)
{
    this.name=name
    this.sound=sound
    this.height=height
    this.type=type
    this.getName=()=>
    {
        return this.name
    }


}

var bob=new animal('bob', 'bark', 22, 'Dog')
var wuro=new animal('wuro', 'meaw', 11, 'cat')
console.log(bob);
console.log(wuro)


function car(color='black', modelNum, year=1980, distance, time)
{
    this.color=color
    this.modelNum=modelNum
    this.year= year
    this.distance=distance
    this.time= time

    this.speed=()=>
    {
        return this.distance/this.time
    }

}

