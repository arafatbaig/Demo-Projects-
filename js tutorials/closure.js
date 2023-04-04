document.getElementById("loginbutton").onclick = login();


function login(){
    let userName = "Noobie" ;
    let userinbox = 1;

    function alertuser(){
        alert(`${userName} you have ${userinbox} new messages!` );
        userinbox = 0;
    }
    return alertuser;
}










