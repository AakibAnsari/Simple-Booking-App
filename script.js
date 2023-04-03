var form= document.getElementById('addForm');
var itemlist = document.getElementById('items');
var fname= document.getElementById('fname');
var lname= document.getElementById('lname');
var email= document.getElementById('email');

form.addEventListener('submit', addItem);
itemlist.addEventListener('click', removeItem);

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
    li.appendChild(deletebtn);
    itemlist.appendChild(li); 



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

