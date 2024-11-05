var comments;
var page = 1;
async function get_pfp(user){
    var pfp = (await fetch('https://api.jamied132.workers.dev/users/'+user+'/pfp')).json()
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
    fetch("https://api.jamied132.workers.dev/auth/signin",{method:"POST",headers:{'Authorization':btoa(JSON.stringify({username:username,password:password}))}}).then(r=>r.json()).then(j=>{
        if(!j.error){
            sessionStorage.setItem('session',btoa(JSON.stringify({username:username,password:password})));
            window.location.reload();
        }
    })}catch(e){
        document.querySelector("#topnav ul.account-nav .sign-in .error").innerHTML = "incorrect username or password.";
        document.querySelector("#topnav ul.account-nav .sign-in .error").style.display = "block";
    }
});
var prev_text=``;
async function load_page(pg){
fetch('https://api.jamied132.workers.dev/users/elaruu/comments?page='+pg).then(com=>com.json()).then(result=>{
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
        fetch("https://api.jamied132.workers.dev/users/elaruu/comments?page="+String(parseInt(page)+1)).then(r=>r.json()).then(j=>{
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
fetch('https://api.jamied132.workers.dev/users/elaruu/pfp').then(res=>res.json()).then(j=>{
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
if(sessionStorage.getItem('session')){
    var session = JSON.parse(atob(sessionStorage.getItem('session')));
    if(session.username && session.password){
        fetch('https://api.jamied132.workers.dev/auth/signin',{method:'POST',headers:{'Authorization':btoa(JSON.stringify(session))}}).then(res=>res.json()).then(j=>{
            if(!j.error){
                signedin=true;
                document.querySelector("#actall").innerHTML=document.querySelector("#signedintemp").innerHTML;
                var settings;
                fetch('https://api.jamied132.workers.dev/users/'+session.username.toLowerCase()+'/pfp').then(res=>res.json()).then(j=>{
                    settings=j;
                    var pfp=settings.pfp;
                    
                    document.querySelectorAll("#myuserimage").forEach(img=>{
                        img.setAttribute('src',pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp);
                    });
                    
                    document.querySelectorAll("#myusername").forEach(p=>{
                        p.innerText=session.username;
                    });
                    document.querySelectorAll("#myprofileurl").forEach(a=>{
                        a.setAttribute('href','/users/'+session.username)
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
}





    
    const text = "@everyone follow @mike.marc now pls lmao";
const replacedText = text.replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>');
console.log(replacedText); 
