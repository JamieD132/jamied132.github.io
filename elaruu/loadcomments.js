//update
//script compatable with backend v3 and v4
var comments;
var page = 1;
var busy = false;
async function get_pfp(user){
    var pfp = (await fetch('https://api.jamied132.is-a.dev/users/'+user+'/pfp')).json()
    if(pfp.error){
        return '/elaruu/img/defaultpfp.png'
    }else{
        return pfp == 'default' ? '/elaruu/img/defaultpfp.png' : pfp
    }
    
}
function create_reply_form(elem){
    elem.parentElement.parentElement.querySelector("#reply_form").innerHTML=`<form>
    <div class="control-group tooltip right">
      <textarea name="content"></textarea>
      
      <span class="hovertext error" data-control="error" data-content="comment-error"><span class="arrow"></span><span class="text"></span></span>
      <span class="small-text">You have <span id="chars-left-id">500</span> characters left.</span>
    </div>
    <div class="control-group">
        <div class="button small" data-parent-thread="id" data-commentee-id="id" data-control="post"><a href="#null">Post</a></div>
        <div class="button small grey" data-control="cancel"><a href="#null">Cancel</a></div>
      <span class="notification"></span>
    </div>
  </form>`
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
document.querySelector("#main-post-form textarea").addEventListener("focus",(e)=>{
    if(!signedin){
        alert('You are not signed in!');
        e.target.blur();
    }
});
document.querySelector(".control-group .button a").addEventListener("click",(e)=>{
    e.preventDefault();
    if(!busy){
        busy = true;
        if(signedin){
            var textarea = document.querySelector("#main-post-form textarea");
            if(textarea.parentElement.classList.contains("error")){
                textarea.parentElement.classList.remove("error");
            }
            if(textarea.textLength < 1){
                textarea.parentElement.classList.add("error");
                textarea.parentElement.querySelector("#comment-alert .text").innerHTML = 'You can\'t post a blank comment!';
                busy = false;
            }else if(textarea.textLength > 500){
                textarea.parentElement.classList.add("error");
                textarea.parentElement.querySelector("#comment-alert .text").innerHTML = 'You\'re comment is too long!';
                busy = false;
            }else{
                e.target.parentElement.classList.add("posting");
                fetch("https://api.jamied132.is-a.dev/users/elaruu/comment",{method:'POST',headers:{'Authorization':session},body:JSON.stringify({'content':textarea.value})}).then(r=>{
                     if (!r.ok) {
                        console.error("Error posting comment:", r.status, r.statusText);
                        r.json().then(errorMessage => {
                          console.error("Error message:", errorMessage.message);
                          textarea.parentElement.querySelector("#comment-alert .text").innerHTML = errorMessage.message;
                          textarea.parentElement.classList.add("error");
                        }).catch(error => {
                          textarea.parentElement.querySelector("#comment-alert .text").innerHTML = "an unknown error occured. <a href='/contact'>help</a>";
                          textarea.parentElement.classList.add("error");
                          console.error("Failed to extract error message:", error);
                        });
                        e.target.parentElement.classList.remove("posting");
                        busy = false;
                        return Promise.reject(response); // Reject the promise to signal an error
                    }
                    return r.json()
                }).then(j=>{
                    if(!j.error){
                        textarea.innerHTML = '';
                        e.target.parentElement.classList.remove("posting");
                        busy = false;
                    }
                });
            }
            
        }else{
            alert('You are not signed in!');
            busy = false;
        }
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
                <div class="content">`+com.content.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>')+`</div>
                <div>
                <span class="time" title="${com.date ? new Date(com.date).toLocaleString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${com.date ? moment.unix(com.date/1000).fromNow() : 'archived comment'}</span>
                <a class="reply" style="${signedin ? 'display: inline;' : 'display: none;'}" href="#null">
                    <span>reply</span>
                </a>
                </div>
                <div data-content="reply-form" id="reply_form"></div>
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
                    <div class="content">`+rep.content.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>')+`</div>
                    <div>
                    <span class="time" title="${rep.date ? new Date(rep.date).toLocaleString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${rep.date ? moment.unix(rep.date/1000).fromNow() : 'archived comment'}</span>
                    <a class="reply" style="${signedin ? 'display: inline;' : 'display: none;'}" href="#null">
                        <span>reply</span>
                    </a>
                    </div>
                    <div data-content="reply-form" id="reply_form"></div>
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
var session;
if(localStorage.getItem('session')){
    session = localStorage.getItem('session');
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
            document.querySelectorAll(".reply").forEach(a=>{
                a.style.display='inline';
                a.addEventListener("click",function(e){
                    e.preventDefault();
                    add_reply_form(e.target);
                });
            });
        }
        document.querySelectorAll(".dropdown-toggle").forEach((elem)=>{
            elem.addEventListener("click",(e)=>{
                return elem.parentElement.classList.contains("open") ? elem.parentElement.classList.remove("open") : elem.parentElement.classList.add("open");
            });
        });
        
    })
    
}
