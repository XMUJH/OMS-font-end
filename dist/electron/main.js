module.exports=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=1)}([function(a){a.exports=require('electron')},function(a,b,c){'use strict';function d(){e.Menu.setApplicationMenu(null),h=new e.BrowserWindow({height:750,useContentSize:!0,width:1e3,frame:!1}),h.loadURL(j),h.on('closed',function(){h=null})}Object.defineProperty(b,'__esModule',{value:!0});var e=c(0),f=c.n(e),g=c(0);global.__static=c(2).join(__dirname,'/static').replace(/\\/g,'\\\\');var h,i=g.ipcMain;i.on('min-main-window',function(){h.minimize()}),i.on('close-main-window',function(){e.app.quit()}),i.on('max-main-window',function(){h.isMaximized()?h.restore():h.maximize()});var j='file://'+__dirname+'/index.html';e.app.on('ready',d),e.app.on('window-all-closed',function(){'darwin'!==process.platform&&e.app.quit()}),e.app.on('activate',function(){null===h&&d()})},function(a){a.exports=require('path')}]);