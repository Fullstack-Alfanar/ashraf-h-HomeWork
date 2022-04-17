function sorge() {

    if (localStorage.getItem("arr")) {
        let arrays = JASON.parse(localStorage.getItem("arr"));
        let input = (input1 = input2 = null);

        for (i = 0; i < arrays.length; i++) {
            
            input = arrays[i].p_name;
            input1 = arrays[i].p_age;
            input2 = arrrays[i].p_img;
            insertdata(input, input1, input2)
        }
    }
}



function insertdata(e1, e2, e3) {
    let element = [];
    let getid = [];

    let tbl = document.getElementById("tb");

    element[0] = document.createElement("label");
    element[1] = document.createElement("label");
    element[2] = document.createElement("img");
    element[3] = document.createElement("td");
    element[4] = document.createElement("td");
    element[5] = document.createElement("td");
    element[6] = document.createElement("tr");


    element[0].textContent = e1;
    element[1].textContent = e2;
    element[2].src = e3;

    element[3].appendChild(element[0]);
    element[4].appendChild(element[1]);
    element[5].appendChild(element[2]);

    element[6].appendChild(element[3]);
    element[6].appendChild(element[4]);
    element[6].appendChild(element[5]);

    getid[3].appendChild(element[6]);
}

