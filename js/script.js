"use strict"

var hora = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //Quantos milésimos valem 1 segundo
var cron;

function start(){

    cron = setInterval(() => { timer(); }, tempo);

};

function pause(){

    clearInterval(cron);

};

function stop(){

    clearInterval(cron);
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById('counter').innerText = '00:00:00';
};

function timer(){

    seg++;

    if (seg == 60) {
        seg = 0;
        min++;

        if (min == 60) {
            min = 0;
            hora++;
        }
    }

    var format = (hora < 10 ? '0' + hora : hora) + ':' + (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.getElementById('counter').innerText = format;
};
