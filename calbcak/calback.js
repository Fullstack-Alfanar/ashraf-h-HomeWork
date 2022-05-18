function cool(a){
    return a;
    
}

function callback(name){
    console.log(name("ashraf"))
}

callback(cool)
////////

function nice(a){
    return a;
    
}

function callback2(number){
    console.log(number(Math.floor(Math.random() * 100)))
}

callback2(nice)


/////////

function rand(){
    arr=[];
    for(i=0;i<5;i++)
    arr[i]=(Math.floor(Math.random() * 100))
    return arr;
}

function amazing(num) {
	console.log("Num: "+ num() );
}

amazing(rand)
