let btn = document.getElementById('submit');
let table = document.getElementById('table');

btn.addEventListener('click', function(event){
var fname = document.getElementById('inputFirst');
var lname = document.getElementById('inputLast');
var email = document.getElementById('inputEmail');
var number = document.getElementById('inputNumber');

    var row = document.createElement('tr');
    var f = document.createElement('td');
    var l = document.createElement('td');
    var e = document.createElement('td');
    var n = document.createElement('td');
    // alert(`This is ${row.innerText}`);
    f.innerText = fname.value;
    l.innerText = lname.value;
    e.innerText = email.value;
    n.innerText = number.value;
    if(fname == ""||lname == ''||email==''||number==''){
        alert("field can't be empty !!!");
    }
    else{
        table.appendChild(row);
        row.appendChild(f);
        row.appendChild(l);
        row.appendChild(e);
        row.appendChild(n);
    }
    fname.value = "";
    lname.value = "";
    email.value = "";
    number.value = "";
    event.preventDefault();
})