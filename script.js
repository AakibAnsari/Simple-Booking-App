var form= document.getElementById('addForm');
var itemlist = document.getElementById('items');
var fname= document.getElementById('fname');
var lname= document.getElementById('lname');
var email= document.getElementById('email');


function savetolocal(event){
    event.preventDefault();
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    const myobj={
        fname,
        lname,
        email
    };
    // let myobjserializeed= JSON.stringify(myobj);
    // localStorage.setItem(myobj.email, myobjserializeed);
    // console.log(myobjserializeed);
    axios.post('https://crudcrud.com/api/b7ce83c923d942eda945459562990f5e/users',myobj)
    .then((res) => {
        show(res.data); 
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    // show(myobj);   
}

function show(myobj){
    var li = document.createElement('li');
    li.textContent=myobj.fname+' '+myobj.lname+' '+myobj.email+' ';
    const deleteButton = document.createElement('input');
    deleteButton.type='button';
    deleteButton.value='Delete';
    deleteButton.className='btn btn-danger';
    deleteButton.onclick= () => {
        localStorage.removeItem(myobj.email);
        itemlist.removeChild(li);
    }
    const editButton = document.createElement('input');
    editButton.type='button';
    editButton.value='Edit';
    editButton.className='btn btn-primary';
    editButton.onclick= () => {
        localStorage.removeItem(myobj.email);
        itemlist.removeChild(li);
        document.getElementById('fname').value=myobj.fname;
        document.getElementById('lname').value=myobj.lname;
        document.getElementById('email').value=myobj.email;
    }
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    itemlist.appendChild(li);
}
function displayitem(){
    // keys = (Object.values(localStorage));
    // console.log(keys);
    // for (var i = 0; i < localStorage.length; i++ ) {
    //     res=JSON.parse( localStorage.getItem( localStorage.key( i ) ) );
    //     {
    //     show(res)
    //     }
    //     // console.log(res)
    // }
    axios.get('https://crudcrud.com/api/b7ce83c923d942eda945459562990f5e/users')
    .then((res) => {
        for (var i = 0; i < res.data.length; i++ ){
            show(res.data[i]); 
            console.log(res.data[i]);
        }
        
    })
    .catch((err)=>{
        console.log(err);
    })
}
displayitem();
