(this["webpackJsonprecord-button"]=this["webpackJsonprecord-button"]||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(11),o=a.n(r),s=(a(23),a(15)),c=a(12),l=a(13),m=a(17),u=a(16),d=(a(24),a(14)),h=a.n(d),b=(a(25),new h.a({bitRate:128})),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).startTimer=function(){i.setState({timerOn:!0,timerTime:i.state.timerTime,timerStart:Date.now()-i.state.timerTime}),i.timer=setInterval((function(){i.setState({timerTime:Date.now()-i.state.timerStart})}),10)},i.stopTimer=function(){i.setState({timerOn:!1}),clearInterval(i.timer)},i.resetTimer=function(){i.setState({timerStart:0,timerTime:0})},i.start=function(){i.state.isBlocked?i.askMicrophonePermissions():b.start().then((function(){i.setState({isRecording:!0}),i.startTimer()})).catch((function(e){return console.error(e)}))},i.stop=function(){b.stop().getMp3().then((function(e){var t=Object(s.a)(e,2),a=(t[0],t[1]),n=URL.createObjectURL(a);i.setState({blobURL:n,isRecording:!1,hasRecorded:!0,clickText:"You can listen to your recording by pressing the play button below. Click submit if you are satisfied with your recording, else press the microphone button to record again."}),i.stopTimer(),i.resetTimer()})).catch((function(e){return console.log(e)}))},i.state={clickText:"Press the microphone button to start recording",isRecording:!1,hasRecorded:!1,isBlocked:!1,timerOn:!1,timerStart:0,timerTime:0,blobURL:""},i}return Object(l.a)(a,[{key:"askMicrophonePermissions",value:function(){var e=this;navigator.getUserMedia({audio:!0},(function(){e.setState({isBlocked:!1})}),(function(){e.setState({isBlocked:!0})}))}},{key:"render",value:function(){var e=this.state.timerTime,t=("0"+Math.floor(e/10)%100).slice(-2),a=("0"+Math.floor(e/1e3)%60).slice(-2),i=("0"+Math.floor(e/6e4)%60).slice(-2),r=("0"+Math.floor(e/36e5)).slice(-2);return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},!1!==this.state.timerOn||0!==this.state.timerTime||this.state.isRecording?null:n.a.createElement("div",{className:"mainContainer"},n.a.createElement("div",{className:"clickText"},this.state.clickText),n.a.createElement("div",{onClick:this.start,disabled:this.state.isRecording,className:"startButton"})),this.state.isRecording?n.a.createElement("div",null,n.a.createElement("div",{className:"recordingTime"},n.a.createElement("span",{className:"recordingText"},"Recording Audio"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("span",{className:"stopwatch"},r," : ",i," : ",a," :"," ",t)),n.a.createElement("button",{onClick:this.stop,disabled:!this.state.isRecording,className:"stopButton"})):null,this.state.hasRecorded?n.a.createElement("audio",{className:"audioControls",src:this.state.blobURL,controls:!0}):null))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b46bf6cf.chunk.js.map