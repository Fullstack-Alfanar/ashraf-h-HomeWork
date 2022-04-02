//q1
//   function name() {
//       let name = prompt("enter your name")
//       let lname = prompt("enter your  last name")
//        document.write("welcome " + " " + name + " " + lname)
//    }

// name()
////////////////////////////////////////////////////////////////
//q2
//function avreg(a, b, c) {
//let sum = a + b + c ;
//  document.write(sum / 3+"<br>")
//}

//avreg(50, 30, 70)
//var a=Math.random() * 100
//var b=Math.random() * 100
//var c=Math.random() * 100;
//avreg(a,b,c)
// var a= prompt("enter number")
//var b= prompt("enter number")
//var c= prompt("enter number")
//avreg(a,b,c)

////////////////////////////////////////////////////////
//q3
// function len(n) {
//     for (var i = 0; i < n; i++)
//         document.write("*")
// }

// function size(n) {
//     for (var i = 0; i < n; i++) {
//         len(n)
//         document.write("<br>")
//     }
// }

// size(5)
////////////////////////////////////////////////////////////

//q4
// function limit(n) {
//     for (var i = 1; i <= n; i++) {
//         document.write(i)

//     }

// }
// function size(n) {
//     for (var i = 1; i <= n; i++) {
//         limit(i)
//         document.write("<br>")
//     }
// }


// size(prompt("enter number")) 
////////////////////////////////////////////////////////

//q5
//  function limit(n) {
//      for (var i = 1; i <= n; i++) {
//         document.write("*")

//      }

//  }
//  function size(n) {
//     for (var i = n; i >= 0; i--) {
//          limit(i)
//         document.write("<br>")
//     }
//  }


// size(prompt("enter number")) 
//////////////////////////////////////////////////

//q6
// function limit(n) {
//     for (var i = 1; i <= n; i++) {
//        document.write(i)

//     }
//     for (var i = 1; i <= n; i++) {
//         document.write("*")

//      }
// }
// function size(n) {
//    for (var i = n; i >= 0; i--) {
//         limit(i)
//        document.write("<br>")
//    }
// }


// size(prompt("enter number")) 
////////////////////////////////////////////////////////////

//q7
function first(n) {
    for (var i = 1; i <= n; i++) {
        document.write(i)

    }
 }

 function fsec(n) {
    for (var i = 1; i <= n; i++) {
        document.write(i)

    }
 }

 function size(n) {
     var num = n
    for (var i = n; i >= 0; i--) {
        first(i)
       document.write("<br>")
    }
    for (var i = 1; i <= num; i++) {
        fsec(i)
       document.write("<br>")
    }

 }


 size(prompt("enter number")) 
