var s=(t=>(t.close="closeMeasureTool",t.open="openMeasureTool",t))(s||{});const l={height:"300px",width:"270px"},p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAjJJREFUaEPtmd1VAjEQhTN0IFoAPkAdWInyKBShFiE+qpVgHfDgFqBbAvEE3J8smfxMZtA9Z3mE3eR+2eTOnQVUzz/Qc/1KDODqZTffa/16WCAN7+Vq+iixWCIAR/Fq0wjWhRQEO8Cp+ApDBoIVABcvB8EGEBYvA8ECEC+eHyIbIF18AwFaPX2vZm857pQNMF5vP5WCSVvECNSN7UJKgdYLDXC01fqji3I5u/5XAEb81/30Y7ze6bawcjmFy+ftXRfCfP+nAI0oXYwAFka8EeQCMN9j11Mhsuh9k2IAVKHYfQMAtjLDE4jca8Et1Pi8LlJ8m/oE2vPFBEAvgCtVxvo2FcCuK+EAiAJgFTbWt3kADs2EN4o7ATDxVZGK2Z5UAFex80GcAHCI9xWyGPgUCAuAS3wugF2x7ezUPdg1AD1Vxqwp5zW2G9YArlTJOS3vWE2KrQEu1rsNKDXnnUhqNAeA++BICcgbt+2G1iFOOf0hCVQbrcaNNZQTG+WCyAGIFW9gnYUMgzhvFrKfMVZE0SiBQZw3Cx0hfAnAG+ZyeljqFuraeSi+BOM0tYelAqTOFwQIuc3QkVFX6Pe+4Qn0fgthPSx2iKk9tth7IayHdQHk9NhnAmh6WAXqoT2p64Wv+T22xxYDQLNT5421S0CoSMUYFIsLUaI4h3g0zMWQd69JgeASzwpgBouB4BTPDhCC4BYvAoBBSIgXA6gg9gC3oPSk/c8N5Xz57mFxIW5RKeP1HuAHwGT8QByJd+kAAAAASUVORK5CYII=";class f{constructor(e,A){this.iFrame=null,this.targetOrigin="",this.iFrame=e,this.targetOrigin=A,window.addEventListener("message",this.handle,!1)}send(e){this.targetOrigin?this.iFrame.postMessage(e,this.targetOrigin):this.iFrame.postMessage(e,"*")}handle(e){e.data.source!="react-devtools-content-script"&&e.data.source!="react-devtools-bridge"&&console.log(e)}destroy(){window.removeEventListener("message",this.handle,!1)}}const o="inject-D"+Date.now().toString(),w=`
    .${o}{
    outline: 1px solid red;
    }
`;let g,r=null,d=!1,c=null,a=!1;const m=t=>{if(d&&c&&(c.style.top=t.clientY+"px",c.style.left=t.clientX+"px"),a)return;let e=document.elementFromPoint(t.clientX,t.clientY);e&&(e.tagName==="IFRAME"||e.id===o||e.id===o+"-")||e!==r&&(r&&r.classList.remove(o),r=e,e&&e.classList.add(o))},u=t=>{(window.event?t.keyCode:t.which)===81&&(a=!a,a&&g.send("hello"))},E=t=>{s.open?window.addEventListener("mousemove",m):s.close&&window.removeEventListener("mousemove",m)},x=t=>{if(t==s.open){window.document.body.addEventListener("keydown",u);const e=document.querySelector(o)||window.document.createElement("style");e.className=o,e.innerHTML=w,window.document.head.appendChild(e)}else if(t==s.close){window.document.body.removeEventListener("keydown",u);const e=document.querySelector("."+o);e&&e.remove()}};let h=null;const y=t=>{if(t==s.open){const e=document.querySelector("#"+o)||document.createElement("iframe");e.id=o,console.log(l.width,l.height),e.style.cssText=`width: ${l.width};
                                       height: ${l.height};
                                       border: none;
                                       border-radius: 10px;
                                     `;const A=chrome.runtime.getURL("contentPage/index.html");e.src=A;let n=document.createElement("div");n.id=o,n.style.cssText=`position: fixed;
                             z-index: 1000000;
                             top: 10px;
                             left: 10px;
                             box-shadow: 0 0 10px #898989;
                             width: ${l.width};
                             height: ${l.height};
                             border-radius: 10px;`;let i=document.createElement("img");i.src=p,i.id=o+"-",i.style.cssText=`width: 20px;
                            height: 20px;
                            position: absolute;
                            top: -10px;
                            left: -10px;
                            cursor: grab;`,n.appendChild(i),n.appendChild(e),document.body.appendChild(n),c=n,i.onclick=()=>{d=!d,d?i.style.cursor="grabbing":i.style.cursor="grab"},g=new f(e.contentWindow),g.send("hello"),h=n}else t==s.close&&document.querySelector(`#${o}`)&&document.querySelector(`#${o}`).remove()};chrome.runtime.onMessage.addListener(t=>{if(t.type=="number"&&h){const e=(+t.info/100).toFixed(2).toString();h.style.opacity=e}else x(t.info),E(t.info),y(t.info)});
