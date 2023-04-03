var form= document.getElementById('addForm');
var itemlist = document.getElementById('items');
var fname= document.getElementById('fname');
var lname= document.getElementById('lname');
var email= document.getElementById('email');

form.addEventListener('submit', addItem);
itemlist.addEventListener('click', removeItem);
itemlist.addEventListener('click', editItem);


function addItem(e){
    e.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var li = document.createElement('li');
    li.className='list-group-item'
    li.appendChild(document.createTextNode(fname));
    li.appendChild(document.createTextNode(lname));
    li.appendChild(document.createTextNode(email));

    //create delete button element
    var deletebtn = document.createElement('button');   
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('delete'));

    var editbtn = document.createElement('button');   
    editbtn.className = 'btn btn-danger btn-sm float-right edit';
    editbtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(deletebtn);
    li.appendChild(editbtn);
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

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            console.log(li.childNodes[2].nodeValue);
            var email = li.childNodes[2].nodeValue;
            itemlist.removeChild(li);
            localStorage.removeItem(email);
        }
    }

}

//edit item
function editItem(e){
    if(e.target.classList.contains('edit')){
        if(confirm('Are you Sure')){
            var li = e.target.parentElement;
            
            var Nemail = li.childNodes[2].nodeValue;
            var Nfname = li.childNodes[0].nodeValue;
            var Nlname = li.childNodes[1].nodeValue;
            document.getElementById('fname').value=Nfname;
            document.getElementById('lname').value=Nlname;
            document.getElementById('email').value=Nemail;
            itemlist.removeChild(li);
            localStorage.removeItem(Nemail);
        }
    }

}