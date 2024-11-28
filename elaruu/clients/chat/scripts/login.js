//login v5.0.0
//compatable with backend >= v3.0.0
//compatable with client 2 (chat.jamied132.is-a.dev) using backend 4.1.0
//variables defined in response from client 2:
//profileusername: username of the profile currently displayed
//signedin: true/false
//_____
//current migration status:
//   session storage    -->    local storage   -->   document cookies
//                             ^^^^^^^^^^^^^
/*Description
This script is used within the navigation bar and is returned from topnav(sess)
it defines the signedin variable
needs to switch from localstorage to document cookies
*/
if(document.querySelector(".dropdown-toggle")){
    document.querySelectorAll(".dropdown-toggle").forEach((elem)=>{
        elem.addEventListener("click",(e)=>{
            return elem.parentElement.classList.contains("open") ? elem.parentElement.classList.remove("open") : elem.parentElement.classList.add("open");
        });
    });
}
if(document.querySelector("#login")){
    document.querySelector("#login").addEventListener("submit",(e)=>{
        e.preventDefault();
        var username = document.querySelector("#login_dropdown_username").value;
        var password = document.querySelector(".wide.password").value;
        try{
        fetch("https://api.jamied132.is-a.dev/auth/signin",{method:"POST",headers:{'Authorization':btoa(JSON.stringify({username:username,password:password}))}}).then(r=>{
            if (!r.ok) {
                console.error("Error:", r.status, r.statusText);
                r.json().then(errorMessage => {
                  console.error("Error message:", errorMessage.message);
                  document.querySelector("#topnav ul.account-nav .sign-in .error").innerHTML = errorMessage.message;
                  document.querySelector("#topnav ul.account-nav .sign-in .error").style.display = "block";
                }).catch(error => {
                  document.querySelector("#topnav ul.account-nav .sign-in .error").innerHTML = "an unknown error occured. <a href='/contact'>help</a>";
                  document.querySelector("#topnav ul.account-nav .sign-in .error").style.display = "block";
                  console.error("Failed to extract error message:", error);
                });
                return Promise.reject(response); // Reject the promise to signal an error
            }
            return r.json()
        }).then(j=>{
            if(!j.error){
                fetch("https://api.jamied132.is-a.dev/auth/connect",{method:"POST",headers:{'Authorization':btoa(JSON.stringify({username:username,password:password}))}}).then(r=>r.json()).then(j=>{
                    document.cookie=`session=${j.code || null}; path=/;`;
                    window.location.reload();
                })
                
            }
        })
        }catch(e){
            document.querySelector("#topnav ul.account-nav .sign-in .error").innerHTML = "an unknown error occured. <a href='/contact'>help</a>";
            document.querySelector("#topnav ul.account-nav .sign-in .error").style.display = "block";
        }
    });
}
if(document.querySelector(".reply")){
    document.querySelectorAll(".reply").forEach(a=>{
        a.style.display='inline';
        a.addEventListener("click",function(e){
            e.preventDefault();
            add_reply_form(e.target);
        });
    });
}
if(document.querySelector("#logout")){
    document.querySelector("#logout").addEventListener("click",()=>{
        document.cookie="session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
}
