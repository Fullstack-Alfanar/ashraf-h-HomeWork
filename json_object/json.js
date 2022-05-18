var book1={
    ID: '1111',
    Name:'harry_ptter',
    Author:'ashraf',
    Price:'8498',
}

var book2={
    ID: '2222',
    Name:'balck_ship',
    Author:'alaa',
    Price:'1651',
}

var book3={
    ID: '3333',
    Name:'robin_hood',
    Author:'adeer',
    Price:'9517',
}

var obj=JSON.stringify({book1});
console.log(obj)
console.log(JSON.parse(obj));