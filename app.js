/*
 * @Description: app.js
 * @Author: hwluo
 * @Date: 2019-09-22 15:37:42
 * @LastEditTime: 2019-09-22 16:47:56
 * @LastEditors: hwluo
 */
require('./index.scss');

let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

let htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px';

window.addEventListener('resize', function() {
    let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
})