
const emailPopUp = document.getElementById('myEmail');

emailPopUp.addEventListener('click',myEmailPopUp);

function myEmailPopUp(){
    
    Swal.fire({
    icon: 'info',
    title:'My Email',
    text:'dataless@gmail.com'
    })
}

