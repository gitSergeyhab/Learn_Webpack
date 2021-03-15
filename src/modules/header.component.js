import $ from 'jquery';

$('<h1 />')
.text('Hello Webpack from JQuery')
.css({
    textAlign: 'center',
    color: 'blue'
})
.appendTo($('header'))