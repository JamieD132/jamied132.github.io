export async function loadProfile(user){
  var text = ``;
  text += `<div id="pagewrapper">
        <div id="topnav">
            <div class="innerwrap">
                <div class="container">
                    <a href="/" class="logo"><span class="scratch"></span></a>
                    <ul class="site-nav">
                        <li>
                            <a id="project-create" href="/projects/editor/?tip_bar=home">Create</a>
                        </li>
                        <li>
                            <a href="/explore/projects/all">Explore</a>
                        </li>
                        <li>
                            <a href="/ideas">Ideas</a>
                        </li>
                        <li class="last">
                            <a href="/about/">About</a>
                        </li>
                    </ul>
                    <form class="search" action="/search/projects" method="get">
                        <input type="submit" class="glass" value="">
                        <input id="search-input" type="text" placeholder="Search" name="q">
                    </form>               
                    <ul class="account-nav">
                        <li class="join-scratch">
                            <a href="/join">Join Scratch</a>
                        </li>
                        <li id="login-dropdown" class="sign-in dropdown">
                            <span data-toggle="dropdown" class="dropdown-toggle">
                                <span>Sign in</span>
                            </span>
                            <div class="popover bottom dropdown-menu">
                                <div class="arrow"></div>
                                <div class="popover-content">
                                    <form method="post" id="login" action="#">
                                        <label for="username">Username</label>
                                        <input type="text" id="login_dropdown_username" name="username" maxlength="30" class="wide username">
                                        <label for="password" class="password">Password</label>
                                        <input type="password" name="password" class="wide password">
                                        <div class="ajax-loader" style="display:none; float: left;"></div>
                                        <button type="submit">Sign in</button>
                                        <span class="forgot-password">
                                            <a href="/accounts/password_reset/">Need help?</a>
                                        </span>
                                        <div class="error"></div>
                                    </form>
                                </div>
                            </div>
                        </li>
                        <li data-control="modal-login" class="sign-in mobile">
                            <span>Sign in</span>
                        </li>
                    </ul>
                    <script type="text/template" id="template-account-nav-logged-in">
                        <ul class="account-nav logged-in"><li class="messages"><a title="messages - updates and notices" href="/messages" class="messages-icon"><span class="notificationsCount none">0</span></a></li><li class="my-stuff"><a title="my stuff - manage projects and studios" href="/mystuff/" class="mystuff-icon"></a></li><li class="logged-in-user dropdown"><span class="user-name dropdown-toggle" data-toggle="dropdown"><img class="user-icon" src="<%- LOGGED_IN_USER.model.thumbnail_url %>" width="24" height="24"><%- LOGGED_IN_USER.model.username_truncated %><span class="caret"></span></span><div class="dropdown-menu blue" ><ul class="user-nav"><li><a href="<%- LOGGED_IN_USER.model.profile_url %>">Profile</a></li><li><a href="/mystuff/">My Stuff</a></li><% if (LOGGED_IN_USER.model.is_educator){ %><li><a href="/educators/classes/">My Classes</a></li><% } %><% if (LOGGED_IN_USER.model.is_student){ %><li><a href="/classes/<%- LOGGED_IN_USER.model.classroom_id %>/">My Class</a></li><% } %><li><a href="/accounts/settings/">Account settings</a></li><li id="logout" class="logout divider"><form method="post" action="/accounts/logout/"><input type='hidden' name='csrfmiddlewaretoken' value='Xn2kHtspw0dLulAU7pg1XEQ8rikjAwX6' /><input type="submit" value="Sign out"></form></li></ul></div></li></ul>
                    </script>
                </div>
                <iframe class="iframeshim" frameborder="0" scrolling="no"><html><head></head><body></body></html></iframe>
            </div>
            </div>
            <div class="confirm-email banner" data-cue="confirmed_email" style="display:none">
              <div class="container">
                <span><a id="confirm-email-popup" href="#">Confirm your email</a> to enable sharing. <a href="/info/faq/#accounts">Having trouble?</a></span>
                <div class="close">x</div>
              </div>
            </div>
            <div class="container" id="content">
            <div id="alert-view"></div>
            <div class="box" id="profile-data">
                <div class="box-head">
                    <form id="profile-avatar" class="portrait">
                        <div class="avatar">
                            <a href="/users/" id="userlink">
                                <img src="cdn2.scratch.mit.edu/get_image/user/1882674_60x60.png" width="55" height="55">
                                <div class="loading-img s48"></div>
                            </a>  
                        </div>
                    </form>
                    <div class="header-text">
                        <h2 id="username"></h2>
                        <p class="profile-details">
                            <span class="group" id="status" ie="like new scratcher or scratcher or whatever"></span>
                            Joined <span title="" id="ago"></span> ago
                            <span class="location" id="location"></span>
                            </p>
                    </div>
                </div>
            <div class="box-content" id="profile-box">
                <div class="action-bar">
                    <div id="alert-view" class="">
                </div>
            </div>
            <div class="inner clearfix">
                <div class="user-content">
                    <div id="user-details" class="about">
                        <div class="loading-img s48"></div>
                        <h3>About me</h3>
                        <div id="bio-readonly" class="read-only">
                            <div class="viewport" style="overflow: auto;">
                                <p class="overview" id="bio"></p>
                            </div>
                        </div>
                        <h3>What I'm working on</h3>
                        <div id="status-readonly" class="read-only">
                            <div class="viewport" style="overflow: auto;">
                                <p class="overview" id="wiwo"></p>
                            </div>
                        </div>
                    </div>
                    <!--
                    <div class="player">
                        <h3 class="featured-project-heading">Featured Project</h3>
                        <div class="stage" style="width: 282px;">
                            <a href="/projects/1045489299/" id="featured-project">
                                <img src="cdn2.scratch.mit.edu/get_image/project/1045489299_282x210.png" width="282" height="210" alt="Featured project">
                            </a>
                        </div>
                        <span class="title">
                            <a class="project-name" href="/projects/1045489299/">Scratch Won't Save Bug!</a>
                        </span>
                    </div>-->
                </div>
                <div class="doing">
                    <h3>What I've been doing</h3>
                    <div id="activity-feed" id="wibd">
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
        
        </div>
        </div>
        <div class="profile-box-footer-module" id="profile-box-footer">
        </div>
        
        
        
        
        <div class="box slider-carousel-container prevent-select">
            <div class="box-head">
                <h4>Shared Projects (0)</h4>
            <!--<a href="/users/griffpatch/projects/" data-control="view-all">View all</a>-->
            </div>
            <div class="box-content slider-carousel horizontal sliderCarousel" id="shared">
                <div class="viewport empty-field">
                    <div class="content">
                        <h4 id="projects"> hasn't shared any projects yet</h4>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box slider-carousel-container prevent-select">
            <div class="box-head">
                <h4>Favorite Projects</h4>
            <a href="/users//projects/" data-control="view-all" id="viewallfavourite" style="display:none;">View all</a>
            </div>
            <div class="box-content slider-carousel horizontal sliderCarousel" id="shared">
                <div class="viewport empty-field">
                    <div class="content">
                        <h4> hasn't favorited any projects yet</h4>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="box slider-carousel-container prevent-select">
            <div class="box-head">
                <h4>Following</h4>
            <a href="/users//projects/" data-control="view-all" id="viewallfollowing" style="display:none;">View all</a>
            </div>
            <div class="box-content slider-carousel horizontal sliderCarousel" id="shared">
                <div class="viewport empty-field">
                    <div class="content">
                        <h4> isn't following anyone yet</h4>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
        
      
      <div class="box slider-carousel-container prevent-select">
        <div class="box-head">
          <h4>Followers</h4>
          <a href="/users//followers/" data-control="view-all" id="viewallfollowers" style="display:none;">View all</a>
        </div>
        <div class="box-content slider-carousel horizontal sliderCarousel" id="featured" style="height: 100.5px;">
            <div class="viewport empty-field">
                    <div class="content">
                        <h4> isn't following anyone yet</h4>
                        <span></span>
                    </div>
                </div>
        </div>
        <div class="box">
        <div class="box-head">
          <h4>Comments</h4>
        </div>
        <div class="box-content">
          
          
          
      
      
      
      
      <div id="comments">
        
        <div id="comment-form">
          
          
          
              <form id="main-post-form" class="comments-on">
                  <div class="control-group tooltip right">
                      
                      <textarea name="content" placeholder="Leave a comment" data-control="modal-login"></textarea>
                      
                      <span id="comment-alert" class="hovertext error" data-control="error" data-content="comment-error"><span class="arrow"></span><span class="text"></span></span>
                      <span class="small-text">You have <span id="chars-left">500</span> characters left.</span>
                  </div>
                  <div class="control-group">
                      <div class="button small" data-control="modal-login" data-parent-thread="" data-commentee-id=""><a href="#null">Post</a></div>
                  <div class="button small grey" data-control="cancel"><a href="#null">Cancel</a></div>
                      <span class="notification"></span>
                  </div>
              </form>
              
          
          <div class="clearfix"></div>
        </div>
        <div>
          <ul class="comments" data-content="comments">
          <li id="comments-loading" class="top-level-reply">
        <span>Comments loading...</span>
      </li>
          
      
      <!-- end templates/comments/list.html -->
      </ul>
        </div>
      </div>
      
          
        </div>
      </div>
      <!-- end block main-content -->
      
      
              </div>
      
      
              
              
          </div>
    </div>
    <div id="footer">
        <div class="container">
          <style>
            #footer ul.footer-col li {
              list-style-type:none;
              display: inline-block;
              width: 184px;
              text-align: left;
              vertical-align: top;
            }
  
            #footer ul.footer-col li h4 {
              font-weight: bold;
              font-size: 14px;
              color: #666;
            }
  
          </style>
          <ul class="clearfix footer-col">
            <li>
              <h4>About</h4>
              <ul>
                <li><a href="/about/">About Scratch</a></li>
                <li><a href="/parents/">For Parents</a></li>
                <li><a href="/educators/">For Educators</a></li>
                <li><a href="/developers">For Developers</a></li>
                <li><a href="/info/credits/">Our Team</a></li>
                <li><a href="https://www.scratchfoundation.org/supporters">Donors</a></li>
                <li><a href="/jobs/">Jobs</a></li>
                <li><a href="/donate">Donate</a></li>
              </ul>
            </li>
            <li>
              <h4>Community</h4>
              <ul>
                <li><a href="/community_guidelines/">Community Guidelines</a></li>
                <li><a href="/discuss/">Discussion Forums</a></li>
                <li><a href="http://wiki.scratch.mit.edu/">Scratch Wiki</a></li>
                <li><a href="/statistics/">Statistics</a></li>
              </ul>
            </li>
            <li>
              <h4>Resources</h4>
              <ul>
                <li><a href="/ideas">Ideas</a></li>
                <li><a href="/info/faq/">FAQ</a></li>
                <li><a href="/download">Download</a></li>
                <li><a href="/contact-us/">Contact Us</a></li>
              </ul>
            </li>
            <li>
              <h4>Legal</h4>
              <ul>
                <li><a href="/terms_of_use/">Terms of Use</a></li>
                <li><a href="/privacy_policy/">Privacy Policy</a></li>
                <li><a href="/DMCA/">DMCA</a></li>
              </ul>
            </li>
            <li>
              <h4>Scratch Family</h4>
              <ul>
                <li><a href="http://scratched.gse.harvard.edu/">ScratchEd</a></li>
                <li><a href="http://www.scratchjr.org/">ScratchJr</a></li>
                <li><a href="http://day.scratch.mit.edu/">Scratch Day</a></li>
                <li><a href="/conference/">Scratch Conference</a></li>
                <li><a href="http://www.scratchfoundation.org/">Scratch Foundation</a></li>
                <li><a href="/store">Scratch Store</a></li>
              </ul>
            </li>
          </ul>
          <ul class="clearfix" id="footer-menu">
            <li>
              <form id="lang-dropdown" method="post" action="/i18n/setlang/">
                <select id="language-selection" name="language">
                
                  <option value="ab">Аҧсшәа</option>
                
                  <option value="af">Afrikaans</option>
                
                  <option value="ar">العربية</option>
                
                  <option value="ast">Asturianu</option>
                
                  <option value="am">አማርኛ</option>
                
                  <option value="an">Aragonés</option>
                
                  <option value="az">Azeri</option>
                
                  <option value="id">Bahasa Indonesia</option>
                
                  <option value="bn">বাংলা</option>
                
                  <option value="be">Беларуская</option>
                
                  <option value="bg">Български</option>
                
                  <option value="ca">Català</option>
                
                  <option value="cs">Česky</option>
                
                  <option value="cy">Cymraeg</option>
                
                  <option value="da">Dansk</option>
                
                  <option value="de">Deutsch</option>
                
                  <option value="et">Eesti</option>
                
                  <option value="el">Ελληνικά</option>
                
                  <option value="en" selected="">English</option>
                
                  <option value="es">Español (España)</option>
                
                  <option value="es-419">Español Latinoamericano</option>
                
                  <option value="eo">Esperanto</option>
                
                  <option value="eu">Euskara</option>
                
                  <option value="fa">فارسی</option>
                
                  <option value="fil">Filipino</option>
                
                  <option value="fr">Français</option>
                
                  <option value="fy">Frysk</option>
                
                  <option value="ga">Gaeilge</option>
                
                  <option value="gd">Gàidhlig</option>
                
                  <option value="gl">Galego</option>
                
                  <option value="ko">한국어</option>
                
                  <option value="ha">Hausa</option>
                
                  <option value="hy">Հայերեն</option>
                
                  <option value="he">עִבְרִית</option>
                
                  <option value="hi">हिंदी</option>
                
                  <option value="hr">Hrvatski</option>
                
                  <option value="xh">isiXhosa</option>
                
                  <option value="zu">isiZulu</option>
                
                  <option value="is">Íslenska</option>
                
                  <option value="it">Italiano</option>
                
                  <option value="ka">ქართული ენა</option>
                
                  <option value="kk">қазақша</option>
                
                  <option value="qu">Kichwa</option>
                
                  <option value="sw">Kiswahili</option>
                
                  <option value="ht">Kreyòl ayisyen</option>
                
                  <option value="ku">Kurdî</option>
                
                  <option value="ckb">کوردیی ناوەندی</option>
                
                  <option value="lv">Latviešu</option>
                
                  <option value="lt">Lietuvių</option>
                
                  <option value="hu">Magyar</option>
                
                  <option value="mi">Māori</option>
                
                  <option value="mn">Монгол хэл</option>
                
                  <option value="nl">Nederlands</option>
                
                  <option value="ja">日本語</option>
                
                  <option value="ja-Hira">にほんご</option>
                
                  <option value="nb">Norsk Bokmål</option>
                
                  <option value="nn">Norsk Nynorsk</option>
                
                  <option value="oc">Occitan</option>
                
                  <option value="or">ଓଡ଼ିଆ</option>
                
                  <option value="uz">Oʻzbekcha</option>
                
                  <option value="th">ไทย</option>
                
                  <option value="km">ភាសាខ្មែរ</option>
                
                  <option value="pl">Polski</option>
                
                  <option value="pt">Português</option>
                
                  <option value="pt-br">Português Brasileiro</option>
                
                  <option value="rap">Rapa Nui</option>
                
                  <option value="ro">Română</option>
                
                  <option value="ru">Русский</option>
                
                  <option value="nso">Sepedi</option>
                
                  <option value="tn">Setswana</option>
                
                  <option value="sk">Slovenčina</option>
                
                  <option value="sl">Slovenščina</option>
                
                  <option value="sr">Српски</option>
                
                  <option value="fi">Suomi</option>
                
                  <option value="sv">Svenska</option>
                
                  <option value="vi">Tiếng Việt</option>
                
                  <option value="tr">Türkçe</option>
                
                  <option value="uk">Українська</option>
                
                  <option value="zh-cn">简体中文</option>
                
                  <option value="zh-tw">繁體中文</option>
                
                </select>
              </form>
            </li>
          </ul>
        </div>
      </div>
        `


























  document.querySelector('body').innerHTML=text;
  
}
