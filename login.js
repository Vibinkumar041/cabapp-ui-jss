function login() {
    event.preventDefault();
    alert("log in button clicked");
    let mobilenumber=document.querySelector("#mno").value;
    let password=document.querySelector("#pw").value;
    localStorage.setItem("mobnum",mobilenumber);
    if(mobilenumber=="9659644868" && password=="vibin"){
        alert("Log in success");
        window.location.href="cabtype.html";  
    }
    else{
        alert("Log in failed");
        window.location.href="login.html";
    }
}