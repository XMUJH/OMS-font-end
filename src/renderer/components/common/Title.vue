<template>
  <div id="mytitle">
    <h3 class="title">外包管理平台</h3>
    <div class="icon-group">
      <span class="icon" @click="minWindow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve" width="11px" height="11px" class=""><g><rect y="20" width="42" height="4" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/></g> </svg>
      </span>
      <span class="icon" id="max" @click="maxWindow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="11px" height="11px" viewBox="0 0 569.16 569.16" style="enable-background:new 0 0 569.16 569.16;" xml:space="preserve" class=""><g><g>
          <g>
            <path d="M550.188,0H18.972C8.495,0,0,8.495,0,18.972v531.216c0,10.478,8.495,18.972,18.972,18.972h531.216    c10.478,0,18.972-8.494,18.972-18.972V18.972C569.16,8.495,560.666,0,550.188,0z M507.96,507.96H61.2V61.2h446.76V507.96z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/>
          </g>
        </g></g> </svg>
      </span>
      <span class="icon" id="close" @click="closeWindow">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 15.642 15.642" enable-background="new 0 0 15.642 15.642" width="11px" height="11px" class=""><g><path fill-rule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z" data-original="#000000" class="active-path" data-old_color="#ffffff" fill="#ffffff"/></g> </svg>

      </span>
      

    </div>
  </div>
</template>

<script>
  const electron = require('electron')
  const ipc = electron.ipcRenderer
  export default {
    name: 'Mytitle',
    methods: {
      minWindow: function () {
        console.log(123)
        ipc.send('min-main-window')
      },
      maxWindow: function () {
        console.log(123)
        ipc.send('max-main-window')
      },
      closeWindow: function () {
        console.log(123)
        ipc.send('close-main-window')
      }
    }
  }
</script>

<style>
.icon-group{
  position:absolute;
  right:0;
  top:0;
  height:35px;
  -webkit-app-region: no-drag;
}
.icon{
  display: inline-block;
  padding: 6px 16px;
  height:23px;
}
.icon:hover{
  background-color: #e51c23; 
}
.close{
  margin:10px;
}
.title{
  height: 35px;
  margin:auto auto auto 20px;
  line-height:35px;
  font-family:Arial,sans-serif;
  font-size: 14px;
  font-weight: bold;
  color:white;
}
#mytitle {
  position: fixed;
  top:0;
  z-index: 100;
  width: 100%;
  height: 35px;
  background-color: rgb(198, 47, 47);
  -webkit-app-region: drag;
}
</style>