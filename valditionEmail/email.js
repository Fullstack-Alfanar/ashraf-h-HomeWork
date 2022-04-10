
//function to get the elments
function validtions(values) {
  let names = document.getElementById("names");
  validatname(names);
  let ids = document.getElementById("ids");
  validatid(ids);
  let ages = document.getElementById("ages");
  validatage(ages);
  let mails = document.getElementById("emails");
  ValidateEmail(mails);

}




 //function to check name
function validatname(n) {
  var invalidt = /^[0-9.!#$%&'*+\/=?^_`{|}~-]*$/;
  if (n.value.match(invalidt) || n.value == "") {
    alert("please enter valid name")
    return true;
  }
  else{
    alert("succes name")
    return true;
   
  }
}


//function to check id
function validatid(id) {

  
  function ValidateID(str)
  {
     
     if ((IDnum.length > 9) || (IDnum.length < 5))
        return false;
     if (isNaN(IDnum))
        return false;
  
     var conutre = 0, incNum;
     for (var i=0; i < 9; i++)
     {
        incNum *= (i%2)+1;
        if (incNum > 9)
           incNum -= 9;
           conutre += incNum;
     }
     if (conutre%10 == 0)
        return true;
     else
        return false;
  }
}


    //function to tcheck age
function validatage(a) {
  var invalidt = /^[a-zA-Z.!#$%&'*+\/=?^_`{|}~-]*$/;
  if (a.value > 110 || a.value < 0 || a.value.match(invalidt) || a.value == "") {
    alert("please enter valid age")
    return false;
  }
  else {
    alert("succes age")
    return true;

  }
}

//function to check email
function ValidateEmail(m) {
  var invali = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (m.value.match(invali) ) {
    alert("succes email")
    return true;
   
  }
  else if(m.value=="") {
    alert("please enter valid email")
    return false;
  }
}






