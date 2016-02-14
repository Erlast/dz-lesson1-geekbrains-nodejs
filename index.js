/**
 * User: EVGENIA
 * Mail: bunny9@bk.ru
 * Date: 13.02.2016
 * Time: 22:21
 */
var colors = require('colors');
var progress = require('progress');
var ansi = require('ansi');

var cursor = ansi(process.stdout);
var bar = new progress(':bar', {total: 10});
var timer = setInterval(function () {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        cursor.beep();
        console.log("I love node.js".rainbow);
        clearInterval(timer);
    }
}, 100);


