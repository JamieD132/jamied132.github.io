//loader v5.5.3
//compatable with backend >= v3.0.0
//compatable with client 2 (chat.jamied132.is-a.dev) using backend 4.1.0
//variables defined in response from client 2:
//profileusername: username of the profile currently displayed
//signedin: true/false
//updates:
// - ability to like posts
// - markdown!
//..6

const lexer = new marked.Lexer();
lexer.tokenizer.rules.inline.superscript = /\^([^ ]+)\^/g;
lexer.tokenizer.rules.inline.subscript = /~([^ ]+)~/g;
const renderer = new marked.Renderer();
renderer.superscript = (text) => {
  return `<sup>${text}</sup>`;
};
renderer.subscript = (text) => {
  return `<sub>${text}</sub>`;
};
renderer.image = function(href, title, text) {
  return '';
};
marked.setOptions({
  lexer: lexer,
  renderer: renderer
});

var comments;
var page = 1;
var busy = false;
async function get_pfp(user){
    var pfp = (await fetch('https://api.jamied132.is-a.dev/users/'+user+'/pfp')).json()
    if(pfp.error){
        return 'https://jamied132.is-a.dev/elaruu/img/defaultpfp.png'
    }else{
        return pfp == 'default' ? 'https://jamied132.is-a.dev/elaruu/img/defaultpfp.png' : pfp
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
                fetch("https://api.jamied132.is-a.dev/users/"+profileusername+"/comment",{method:'POST',headers:{'Authorization':session},body:JSON.stringify({'content':textarea.value})}).then(r=>{
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
                        return Promise.reject(response);
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
fetch('https://api.jamied132.is-a.dev/users/'+profileusername+'/comments?page='+pg+'&shownfor='+userinfo.username.toLowerCase()).then(com=>com.json()).then(result=>{
        async function load_comments(){
        let text = prev_text;
        let id = 0;
        


         
            
        for(const com of comments){
            id ++;
            text+= `
            <li class="top-level-reply">
            <div id="comment-`+com.id+`" class="comment" data-comment-id="`+id+`">
            <div class="actions-wrap"></div>
            <a href="/users/`+com.user.username+`" id="comment-user" data-comment-user="`+com.user.username+`"><img class="avatar" src="`+com.user.pfp+`" width="45" height="45"></a>
            <div class="info">
                <div class="name">
                <a href="/users/`+com.user.username+`">`+com.user.username+`</a>
                </div>
                <div class="content">`+marked.parse(com.content.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>').replace(/https:\/\/jamied132.is-a.dev([a-zA-Z0-9_-]+)/g, '<a href="/$1">https://jamied132.is-a.dev$1</a>'),{breaks:true}).replaceAll('&amp;gt;','&gt;').replaceAll('&amp;lt;','&lt;')+`</div>
                <div>
                <span class="time" title="${com.date ? new Date(com.date).toLocaleString() : 'This is not a comment by a real user. It was archived from the original elaruu.'}">${com.date ? moment.unix(com.date/1000).fromNow() : 'archived comment'}</span>
                <span class="like-button" id="like-${com.id}" style="color:${com.liked ? 'red' : 'black'};">❤</span>
                <span class="like-text">`+com.likes+`</span>
                <a class="reply" style="${signedin ? 'display: inline;' : 'display: none;'}" href="#null">
                    <span id="reply-button${com.id}">reply</span>
                </a>
                </div>
                <div data-content="reply-form" id="reply-form"></div>
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
                    <div class="content">`+marked.parse(rep.content.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replace(/@([a-zA-Z0-9_-]+)/g, '<a href="/users/$1">@$1</a>'),{breaks:true}).replaceAll('&amp;gt;','&gt;').replaceAll('&amp;lt;','&lt;')+`</div>
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
        document.querySelectorAll(".like-button").forEach((el)=>{
            el.addEventListener("click",(e)=>{
                e.target.style.color=='red'?e.target.style.color='black':e.target.style.color='red';
                e.target.style.color=='red'?e.target.parentElement.querySelector(".like-text").innerHTML=parseInt(e.target.parentElement.querySelector(".like-text").innerHTML)+1:e.target.parentElement.querySelector(".like-text").innerHTML=parseInt(e.target.parentElement.querySelector(".like-text").innerHTML)-1;
                fetch("https://api.jamied132.is-a.dev/comments/"+e.target.getAttribute("id").split("like-")[1]+"/like",{
                    method:'POST',
                    headers:{'Authorization':session}
                }).then(r=>r.json()).then(j=>{
                    j.liked?e.target.style.color='red':e.target.style.color='black';
                    e.target.target.parentElement.querySelector(".like-text").innerHTML=j.likes;
                });
            });
        });
        document.querySelectorAll(".reply span").forEach((el)=>{
            el.addEventListener("click",(e)=>{create_reply_form(e)};
        });
        fetch("https://api.jamied132.is-a.dev/users/"+profileusername+"/comments?page="+String(parseInt(page)+1)).then(r=>r.json()).then(j=>{
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
