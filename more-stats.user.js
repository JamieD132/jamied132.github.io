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
})();
