// ==UserScript==
// @name         More statistics
// @namespace    http://tampermonkey.net/
// @version      2026-04-12
// @description  Adds more statistics to darflen
// @author       JamieD132
// @match        *://darflen.com/statistics
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let stats_info = document.querySelector("#statistics-info");
    let biggest_lovers = document.createElement("div");
    biggest_lovers.innerHTML = `<div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
    <h2 class="statistics-box-title">Biggest Lovers</h2>
    <canvas id="biggest_lovers" style="width: 703px; max-height: 35rem; display: block; height: 349px;" width="878" height="436" class="chartjs-render-monitor"></canvas>`;
    biggest_lovers.classList.add("lb-box");
    biggest_lovers.classList.add("statistics-box");
    stats_info.before(biggest_lovers);
    let biggest_posters = document.createElement("div");
    biggest_posters.innerHTML = `<div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
    <h2 class="statistics-box-title">Biggest Posters</h2>
    <canvas id="biggest_posters" style="width: 703px; max-height: 35rem; display: block; height: 349px;" width="878" height="436" class="chartjs-render-monitor"></canvas>`;
    biggest_posters.classList.add("lb-box");
    biggest_posters.classList.add("statistics-box");
    stats_info.before(biggest_posters);
    let style = getComputedStyle(document.body);
    let text_color = style.getPropertyValue('--default-text-color');
    fetch("https://api.darflen.com/statistics/biggest_lovers").then(j=>j.json()).then((result) => {
        let data = result.data;
        switch (result.code) {
            case "success":
                new Chart("biggest_lovers", {
                    type: "bar",
                    data: {
                        labels: data.labels,
                        datasets: [
                            {
                                label: "Loves",
                                tension: 0,
                                backgroundColor: "orange",
                                data: data.users
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            position: 'top',
                            align: "end",
                            labels: {
                                fontColor: text_color,
                            }
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        interaction: {
                            mode: 'nearest',
                            axis: 'x',
                            intersect: false
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: text_color
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: text_color
                                }
                            }]
                        }
                    }
                });
                break;
        }
    });
    fetch("https://api.darflen.com/statistics/biggest_posters").then(j=>j.json()).then((result) => {
        let data=result.data;
        switch (result.code) {
            case "success":
                new Chart("biggest_posters", {
                    type: "bar",
                    data: {
                        labels: data.labels,
                        datasets: [
                            {
                                label: "Interactions",
                                tension: 0,
                                backgroundColor: "orange",
                                data: data.users
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        legend: {
                            position: 'top',
                            align: "end",
                            labels: {
                                fontColor: text_color,
                            }
                        },
                        tooltips: {
                            mode: 'index',
                            intersect: false
                        },
                        interaction: {
                            mode: 'nearest',
                            axis: 'x',
                            intersect: false
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    fontColor: text_color
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    fontColor: text_color
                                }
                            }]
                        }
                    }
                });
                break;
        }
    });
    let toasts = document.createElement("div");
    toasts.setAttribute("id","toasts");
    document.querySelector("main").appendChild(toasts);
    let styles = document.createElement("style");
    styles.innerHTML = `#username-form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: var(--form-height);
    background-color: var(--form-background-color);
    border: var(--form-border);
    -webkit-border-radius: var(--form-radius);
    border-radius: var(--form-radius);
    margin-top: .66em;
    margin-bottom: 1em;
    padding-left: 1em
}`;
    document.body.appendChild(styles);
    let user_stats = document.createElement("div");
    user_stats.innerHTML=`<h2>User-specific statistics</h2>
<div id="username-form"><input type="text" id="username" placeholder="username" style="width:80%;"><button class="lb-button" id="enter-username" style="display: block;height:inherit;max-width:12em;" cursorshover="true">Search</button></div><div id="user-stats"></div>`
    user_stats.classList.add("lb-box");
    user_stats.classList.add("statistics-box");
    stats_info.before(user_stats);
    user_stats.querySelector("#enter-username").addEventListener("click",()=>{
        let username = user_stats.querySelector("#username").value;
        fetch("https://api.darflen.com/users/"+username).then(j=>j.json()).then(response=>{
            switch(response.code){
                case "success":{
                    let id=response.id;
                    document.querySelector("#user-stats").innerHTML=`<h2 class="statistics-box-title"><span></span>'s interactions</h2><canvas id="user_interactions" style="width: 703px; max-height: 35rem; display: block; height: 349px;" width="878" height="436" class="chartjs-render-monitor"></canvas>
<h2 class="statistics-box-title"><span></span>'s engagements</h2>
<canvas id="user_engagements" style="width: 703px; max-height: 35rem; display: block; height: 349px;" width="878" height="436" class="chartjs-render-monitor"></canvas>`;
                    user_stats.querySelectorAll("h2 span").forEach(e=>e.textContent=response.profile.username);
                    fetch("https://api.darflen.com/statistics/interactions?user="+id).then(j=>j.json()).then((result) => {
                        let data=result.data;
                        switch (result.code) {
                            case "success":{
                                let data = result.data,
                                posts_activity_x = data.labels,
                                posts_activity_y = data.posts,
                                comments_activity_x = data.labels,
                                comments_activity_y = data.comments,
                                replies_activity_x = data.labels,
                                replies_activity_y = data.replies;
                                let style = getComputedStyle(document.body);
                                let text_color = style.getPropertyValue('--default-text-color');
                                // @ts-ignore
                                new Chart("user_interactions", {
                                    type: "line",
                                    data: {
                                        labels: posts_activity_x,
                                        datasets: [
                                            {
                                                label: "Posts",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "orange",
                                                data: posts_activity_y
                                            },
                                            {
                                                label: "Comments",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "skyblue",
                                                data: comments_activity_y
                                            },
                                            {
                                                label: "Replies",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "forestgreen",
                                                data: replies_activity_y
                                            }
                                        ]
                                    },
                                    options: {
                                        responsive: true,
                                        legend: {
                                            position: 'top',
                                            align: "end",
                                            labels: {
                                                fontColor: text_color,
                                            }
                                        },
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false
                                        },
                                        interaction: {
                                            mode: 'nearest',
                                            axis: 'x',
                                            intersect: false
                                        },
                                        scales: {
                                            xAxes: [{
                                                ticks: {
                                                    fontColor: text_color
                                                }
                                            }],
                                            yAxes: [{
                                                ticks: {
                                                    fontColor: text_color
                                                }
                                            }]
                                        }
                                    }
                                });
                                break;
                        }
                        }
                    });
                    fetch("https://api.darflen.com/statistics/engagements?user="+id).then(j=>j.json()).then((result) => {
                        let data=result.data;
                        switch (result.code) {
                            case "success":{
                                let data = result.data,
                                posts_activity_x = data.labels,
                                posts_activity_y = data.interactions,
                                comments_activity_y = data.votes,
                                replies_activity_y = data.loves;
                                let style = getComputedStyle(document.body);
                                let text_color = style.getPropertyValue('--default-text-color');
                                // @ts-ignore
                                new Chart("user_engagements", {
                                    type: "line",
                                    data: {
                                        labels: posts_activity_x,
                                        datasets: [
                                            {
                                                label: "Interactions",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "orange",
                                                data: posts_activity_y
                                            },
                                            {
                                                label: "Votes",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "skyblue",
                                                data: comments_activity_y
                                            },
                                            {
                                                label: "Loves",
                                                tension: 0,
                                                fill: false,
                                                borderColor: "forestgreen",
                                                data: replies_activity_y
                                            }
                                        ]
                                    },
                                    options: {
                                        responsive: true,
                                        legend: {
                                            position: 'top',
                                            align: "end",
                                            labels: {
                                                fontColor: text_color,
                                            }
                                        },
                                        tooltips: {
                                            mode: 'index',
                                            intersect: false
                                        },
                                        interaction: {
                                            mode: 'nearest',
                                            axis: 'x',
                                            intersect: false
                                        },
                                        scales: {
                                            xAxes: [{
                                                ticks: {
                                                    fontColor: text_color
                                                }
                                            }],
                                            yAxes: [{
                                                ticks: {
                                                    fontColor: text_color
                                                }
                                            }]
                                        }
                                    }
                                });
                                break;
                        }
                        }
                    });
                    break;
                }
                case "fail":
                    toast("toasts",response.message);
                    break;
                default:
                    toast("toasts","Failed.");
            }
        });
    });
})();
