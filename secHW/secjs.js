//q1
var x = 0;
function avrg(arr) {
    for (var i = 0; i < arr.length; i++) 
        x += arr[i]
    return y = x / arr.length
}

let arr = [25, 6, 15, 97, 49, 31]
document.write(avrg(arr)) 


//q2

var min =0;
function avrg(arr) {
    for (var i = 0; i < arr.length; i++) 
       if(arr[i]<arr[i-1]){
           min = arr[i]
       }
    return min
}