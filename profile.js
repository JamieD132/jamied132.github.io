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
                    <div id="activity-feed">
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
                        <h4>elaruu hasn't shared any projects yet</h4>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>`
  
}
