var comments;
var page = 1;
async function get_pfp(user){
    var pfp = (await fetch('https://api.jamied132.is-a.dev/users/'+user+'/pfp')).json()
    if(pfp.error){
        return '/elaruu/img/defaultpfp.png'
    }else{
        return pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp
    }
    
}
document.querySelectorAll(".dropdown-toggle").forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        return elem.parentElement.classList.contains("open") ? elem.parentElement.classList.remove("open") : elem.parentElement.classList.add("open");
    });
});
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
                localStorage.setItem('session',j.code || null);
                window.location.reload();
            })
            
        }
    })
    }catch(e){
        document.querySelector("#topnav ul.account-nav .sign-in .error").innerHTML = "an unknown error occured. <a href='/contact'>help</a>";
        document.querySelector("#topnav ul.account-nav .sign-in .error").style.display = "block";
    }
});
var prev_text=``;
async function load_page(pg){
fetch('https://api.jamied132.is-a.dev/users/elaruu/comments?page='+pg).then(com=>com.json()).then(result=>{
        async function load_comments(){
        let text = prev_text;
        let id = 0;
        


         
            
        for(const com of comments){
            id ++;
            text+= `
            <li class="top-level-reply">
            <div id="comments-`+id+`" class="comment" data-comment-id="`+id+`">
            <div class="actions-wrap"></div>
            <a href="/users/`+com.user.username+`" id="comment-user" data-comment-user="`+com.user.username+`"><img class="avatar" src="`+com.user.pfp+`" width="45" height="45"></a>
            <div class="info">
                <div class="name">
                <a href="/users/`+com.user.username+`">`+com.user.username+`</a>
                </div>
                <div class="content">`+com.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>')+`</div>
                <div>
                <span class="time" title="${com.date ? new Date(com.date).toLocaleString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${com.date ? moment.unix(com.date/1000).fromNow() : 'archived comment'}</span>
                <a class="reply" style="display: none;" href="#null">
                    <span class="reply" title="reply">reply</span>
                </a>
                </div>
                <div data-content="reply-form"></div>
            </div>
            </div>
            <ul class="replies" data-thread="347700843">
            `;
            rid=0;
            for(const rep of com.replies){
                rid++;
                id++;
                text+=`
                <li class="`+(rid == com.replies.length ? rid > 3 ? com.replies.length == 4 ? "reply lastvisible last": "reply truncated last" : "reply last" :  rid > 3 ? rid == 4 ? "reply lastvisible" : "reply truncated" : "reply")+`">
                <div id="comments-`+id+`" class="comment" data-comment-id="`+id+`">
                <div class="actions-wrap"></div>
                <a href="/users/`+rep.user.username+`" id="comment-user" data-comment-user="`+rep.user.username+`"><img class="avatar" src="`+rep.user.pfp+`" width="45" height="45"></a>
                <div class="info">
                    <div class="name">
                    <a href="/users/`+rep.user.username+`">`+rep.user.username+`</a>
                    </div>
                    <div class="content">`+rep.content.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>')+`</div>
                    <div>
                    <span class="time" title="${rep.date ? new Date(rep.date).toLocaleString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${rep.date ? moment.unix(rep.date/1000).fromNow() : 'archived comment'}</span>
                    <a class="reply" style="display: none;" href="#null">
                        <span class="reply" title="reply">reply</span>
                    </a>
                    </div>
                    <div data-content="reply-form"></div>
                </div>
                </div>
                </li>
                `;
                
            };
            text+= `</ul>`;
            if(rid>3 && rid == com.replies.length){
                text+=`<div class="more-replies"><span class="pulldown">See all `+rid+` replies<span class="arrow"> ▼</span></span></div>`;
            }
            text+= `</li>`;
        };
        text+=`<div class="button grey" style="position: relative; left: 47%;" data-control="load-more"><span>Load more</span></div>`
        document.querySelector(".comments").innerHTML = text;

        document.querySelectorAll(".button.grey")[1].addEventListener("click",()=>{
            document.querySelectorAll(".button.grey")[1].remove()
            page++;
            prev_text = document.querySelector(".comments").innerHTML;
            load_page(page);
            
        });

        document.querySelectorAll(".more-replies").forEach((el)=>{
            el.addEventListener("click",()=>{
                
                el.parentElement.querySelectorAll(".reply").forEach((el)=>{
                    el.classList.remove("lastvisible");
                    el.classList.remove("truncated");
                });
                el.remove();
            });
        });
        fetch("https://api.jamied132.is-a.dev/users/elaruu/comments?page="+String(parseInt(page)+1)).then(r=>r.json()).then(j=>{
            if(j.comments.length==0){
                document.querySelectorAll(".button.grey")[1].remove()
            }
        })
    }
    var comments= result.comments;
    
    load_comments();

    
});
}
load_page(1);
fetch('https://api.jamied132.is-a.dev/users/elaruu/pfp').then(res=>res.json()).then(j=>{
                        var pfp = j.pfp;
                        
                        document.querySelectorAll("#profileimage").forEach(img=>{
                            img.setAttribute('src',pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp);
                        });
                        
                        document.querySelectorAll("#username").forEach(p=>{
                            p.innerText='elaruu';
                        });
                        document.querySelectorAll("#profileurl").forEach(a=>{
                            a.setAttribute('href','/users/elaruu')
                        });
                    })
var signedin = false;
var userinfo;
if(localStorage.getItem('session')){
    var session = localStorage.getItem('session');
    fetch('https://api.jamied132.is-a.dev/auth/determine',{method:'POST',headers:{'Authorization':session}}).then(res=>res.json()).then(j=>{
        if(!j.error){
            userinfo = j;
            signedin=true;
            document.querySelector("#actall").innerHTML=document.querySelector("#signedintemp").innerHTML;
            var settings;
            fetch('https://api.jamied132.is-a.dev/users/'+userinfo.username.toLowerCase()+'/pfp').then(res=>res.json()).then(j=>{
                settings=j;
                var pfp=settings.pfp;
                
                document.querySelectorAll("#myuserimage").forEach(img=>{
                    img.setAttribute('src',pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp);
                });
                
                document.querySelectorAll("#myusername").forEach(p=>{
                    p.innerText=userinfo.username;
                });
                document.querySelectorAll("#myprofileurl").forEach(a=>{
                    a.setAttribute('href','/users/'+userinfo.username)
                });
                
            })
        }
        document.querySelectorAll(".dropdown-toggle").forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                return elem.parentElement.classList.contains("open") ? elem.parentElement.classList.remove("open") : elem.parentElement.classList.add("open");
            });
        });
    })
    
}
