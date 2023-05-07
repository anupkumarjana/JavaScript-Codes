// Arrow function is => which we can use as function keyword in js

test1= function(){
    console.log(1)
}

//OR, we can write
test1=()=>{          // => is known as fat arrow function 
    console.log(1)
}

test2= function(a){
    console.log(a*2)
}
//OR, we can write
test2=a=>{            // => is known as fat arrow function 
    console.log(a*2)
}


test3= function(a,b){
    console.log(a+b)
}

//OR, we can write
test3= (a,b)=>{        // => is known as fat arrow function 
    console.log(a+b)
}


// if the function is one liner, we can write as
test4= ()=> console.log(102)
test5=b=> console.log(b*3)
test6= (b,c)=> console.log(b*c)

test1()
test2(3)
test3(1,4)
