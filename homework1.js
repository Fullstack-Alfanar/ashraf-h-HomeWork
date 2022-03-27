// q1
var names = []
for (var a = 0; a <= 4; a++) {
    names[a] = prompt("enter name")
}
document.write("the first name is:" + names[0] + "   the last name is: " + names[5])

//q2
var fruits = []
for (var a = 0; a <= 3; a++) {
    fruits[a] = prompt("enter name of fruit")
}

for (var a = 0; a <= 3; a++) {
    document.write("br")
    document.write(fruits[a])
}
document.write("the first name is:" + fruits[0] + "br" + "   the second name is: " + fruits[1] + "br" +
    "   the third name is: " + fruits[2] + "br" + "   the fourth name is: " + fruits[3])

//q3
var grades = []
var notgood = []
for (var a = 0; a <= 9; a++) {
    grades = prompt("enter grade")
    if (grades[a] < 0 || grades[a] > 100)
        notgood[a] = grades[a]
}
for (var i = 0; i < grades.length; i++)
    document.write(notgood[i])

//q4
var numbers = [10,52,33,90,68,64,89,86,37,17,3,99,35,15,81,17,16,78,62,33]
var sum=0
var max=0
var min=0
for(var i=20;i>0;i--){
    document.write(numbers[i])
    sum=+numbers[i]
    if(numbers[i]>max){
        max = numbers[i]
    }
    if(numbers[i]>min){
        min= numbers[i]
    }
}
document.write("the avrige is"+sum/20)
document.write("the sume of the numbers is:"+sum)
document.write("the maximum number is "+max)
document.write("the minimum number is "+min)


//20
var n =prompt("entere number")
for( var i =0 ;i<=n;i++){
    for(var y =0; y<=i;y++){
        document.write(y+"")
    }
    document.write("<br>")
}

//q21
var n = prompt("enter a number");
for (var i = 1; i <= n; i++) {
  for (var y= n; y >=1; y--) {
    document.write(y+ "");
  }
  document.write("<br>");
}

//q23
var n = prompt("enter a number");
while(n>0){
for (var i = n; n>1; n--) {
    document.write(n+"");
  document.write("<br>");
}
n=prompt("enter number")
}