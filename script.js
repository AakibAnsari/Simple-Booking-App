var form= document.getElementById('addForm');
var itemlist = document.getElementById('items');
var fname= document.getElementById('fname');
var lname= document.getElementById('lname');
var email= document.getElementById('email');
form.addEventListener('submit', addItem);

function addItem(e){
    e.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var li = document.createElement('li');
    li.className='list-group'
    li.appendChild(document.createTextNode(fname));
    li.appendChild(document.createTextNode(lname));
    li.appendChild(document.createTextNode(email));
    itemlist.appendChild(li);

    //storing data in storage
    console.log('click');
    let myobj={
        firstName: fname,
        lastName: lname,
        Email: email
    };
    let myobjserializeed= JSON.stringify(myobj);
    localStorage.setItem(email, myobjserializeed);
    console.log(myobjserializeed);   
}



