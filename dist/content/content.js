var i=(t=>(t.close="closeMeasureTool",t.open="openMeasureTool",t))(i||{});const g={height:"333px",width:"300px"},u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAjJJREFUaEPtmd1VAjEQhTN0IFoAPkAdWInyKBShFiE+qpVgHfDgFqBbAvEE3J8smfxMZtA9Z3mE3eR+2eTOnQVUzz/Qc/1KDODqZTffa/16WCAN7+Vq+iixWCIAR/Fq0wjWhRQEO8Cp+ApDBoIVABcvB8EGEBYvA8ECEC+eHyIbIF18AwFaPX2vZm857pQNMF5vP5WCSVvECNSN7UJKgdYLDXC01fqji3I5u/5XAEb81/30Y7ze6bawcjmFy+ftXRfCfP+nAI0oXYwAFka8EeQCMN9j11Mhsuh9k2IAVKHYfQMAtjLDE4jca8Et1Pi8LlJ8m/oE2vPFBEAvgCtVxvo2FcCuK+EAiAJgFTbWt3kADs2EN4o7ATDxVZGK2Z5UAFex80GcAHCI9xWyGPgUCAuAS3wugF2x7ezUPdg1AD1Vxqwp5zW2G9YArlTJOS3vWE2KrQEu1rsNKDXnnUhqNAeA++BICcgbt+2G1iFOOf0hCVQbrcaNNZQTG+WCyAGIFW9gnYUMgzhvFrKfMVZE0SiBQZw3Cx0hfAnAG+ZyeljqFuraeSi+BOM0tYelAqTOFwQIuc3QkVFX6Pe+4Qn0fgthPSx2iKk9tth7IayHdQHk9NhnAmh6WAXqoT2p64Wv+T22xxYDQLNT5421S0CoSMUYFIsLUaI4h3g0zMWQd69JgeASzwpgBouB4BTPDhCC4BYvAoBBSIgXA6gg9gC3oPSk/c8N5Xz57mFxIW5RKeP1HuAHwGT8QByJd+kAAAAASUVORK5CYII=";class p{constructor(e,a){this.iFrame=null,this.targetOrigin="",this.iFrame=e,this.targetOrigin=a,window.addEventListener("message",this.handle,!1)}send(e){this.targetOrigin?this.iFrame.postMessage(e,this.targetOrigin):this.iFrame.postMessage(e,"*")}handle(e){e.data.source!="react-devtools-content-script"&&console.log(e)}destroy(){window.removeEventListener("message",this.handle,!1)}}const n="inject-D"+Date.now().toString(),f=`
    .${n}{
    outline: 1px solid red;
    }
`;let A,l=null,r=!1,d=null,c=!1;const m=t=>{if(r&&d&&(d.style.top=t.clientY+"px",d.style.left=t.clientX+"px"),c)return;let e=document.elementFromPoint(t.clientX,t.clientY);e&&(e.tagName==="IFRAME"||e.id===n||e.id===n+"-")||e!==l&&(l&&l.classList.remove(n),l=e,e&&e.classList.add(n))},h=t=>{(window.event?t.keyCode:t.which)===81&&(c=!c,c&&A.send("hello"))},E=t=>{i.open?window.addEventListener("mousemove",m):i.close&&window.removeEventListener("mousemove",m)},w=t=>{if(t==i.open){window.document.body.addEventListener("keydown",h);const e=document.querySelector(n)||window.document.createElement("style");e.className=n,e.innerHTML=f,window.document.head.appendChild(e)}else if(t==i.close){window.document.body.removeEventListener("keydown",h);const e=document.querySelector("."+n);e&&e.remove()}},C=t=>{if(t==i.open){const e=document.querySelector("#"+n)||document.createElement("iframe");e.id=n,e.style.cssText=`width: ${g.width};
                                       height: ${g.height};
                                       border: none;
                                     `;const a=chrome.runtime.getURL("contentPage/index.html");e.src=a;let s=document.createElement("div");s.id=n,s.style.cssText=`position: fixed;
                             z-index: 1000000;
                             top: 10px;
                             left: 10px;
                             padding: 10px;`;let o=document.createElement("img");o.src=u,o.id=n+"-",o.style.cssText=`width: 20px;
                            height: 20px;
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            cursor: grab;`,s.appendChild(o),s.appendChild(e),document.body.appendChild(s),d=s,o.onclick=()=>{r=!r,r?o.style.cursor="grabbing":o.style.cursor="grab"},A=new p(e.contentWindow),A.send("hello")}else t==i.close&&document.querySelector(`#${n}`)&&document.querySelector(`#${n}`).remove()};chrome.runtime.onMessage.addListener(t=>{w(t.info),E(t.info),C(t.info)});
