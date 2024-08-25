var i=(e=>(e.close="closeMeasureTool",e.open="openMeasureTool",e))(i||{});const a={height:"333px",width:"300px"},h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAjJJREFUaEPtmd1VAjEQhTN0IFoAPkAdWInyKBShFiE+qpVgHfDgFqBbAvEE3J8smfxMZtA9Z3mE3eR+2eTOnQVUzz/Qc/1KDODqZTffa/16WCAN7+Vq+iixWCIAR/Fq0wjWhRQEO8Cp+ApDBoIVABcvB8EGEBYvA8ECEC+eHyIbIF18AwFaPX2vZm857pQNMF5vP5WCSVvECNSN7UJKgdYLDXC01fqji3I5u/5XAEb81/30Y7ze6bawcjmFy+ftXRfCfP+nAI0oXYwAFka8EeQCMN9j11Mhsuh9k2IAVKHYfQMAtjLDE4jca8Et1Pi8LlJ8m/oE2vPFBEAvgCtVxvo2FcCuK+EAiAJgFTbWt3kADs2EN4o7ATDxVZGK2Z5UAFex80GcAHCI9xWyGPgUCAuAS3wugF2x7ezUPdg1AD1Vxqwp5zW2G9YArlTJOS3vWE2KrQEu1rsNKDXnnUhqNAeA++BICcgbt+2G1iFOOf0hCVQbrcaNNZQTG+WCyAGIFW9gnYUMgzhvFrKfMVZE0SiBQZw3Cx0hfAnAG+ZyeljqFuraeSi+BOM0tYelAqTOFwQIuc3QkVFX6Pe+4Qn0fgthPSx2iKk9tth7IayHdQHk9NhnAmh6WAXqoT2p64Wv+T22xxYDQLNT5421S0CoSMUYFIsLUaI4h3g0zMWQd69JgeASzwpgBouB4BTPDhCC4BYvAoBBSIgXA6gg9gC3oPSk/c8N5Xz57mFxIW5RKeP1HuAHwGT8QByJd+kAAAAASUVORK5CYII=",n="inject-D"+Date.now().toString(),p=`
    .${n}{
    outline: 1px solid red;
    }
`;let c=null,d=!1,s=null,A=null,r=!1;const m=e=>{if(d&&s&&(s.style.top=e.clientY+"px",s.style.left=e.clientX+"px"),r)return;let t=document.elementFromPoint(e.clientX,e.clientY);t&&(t.tagName==="IFRAME"||t.id===n||t.id===n+"-")||t!==c&&(c&&c.classList.remove(n),c=t,t&&t.classList.add(n),A=t)},u=e=>{(window.event?e.keyCode:e.which)===81&&(r=!r,r||(A=null),console.log(A))},E=e=>{i.open?window.addEventListener("mousemove",m):i.close&&window.removeEventListener("mousemove",m)},f=e=>{if(e==i.open){window.document.body.addEventListener("keydown",u);const t=document.querySelector(n)||window.document.createElement("style");t.className=n,t.innerHTML=p,window.document.head.appendChild(t)}else if(e==i.close){window.document.body.removeEventListener("keydown",u);const t=document.querySelector("."+n);t&&t.remove()}},w=e=>{if(e==i.open){const t=document.querySelector("#"+n)||document.createElement("iframe");t.id=n,t.style.cssText=`width: ${a.width};
                                       height: ${a.height};
                                       border: none;
                                     `;const g=chrome.runtime.getURL("contentPage/index.html");t.src=g;let l=document.createElement("div");l.id=n,l.style.cssText=`position: fixed;
                             z-index: 1000000;
                             top: 10px;
                             left: 10px;
                             padding: 10px;`;let o=document.createElement("img");o.src=h,o.id=n+"-",o.style.cssText=`width: 20px;
                            height: 20px;
                            position: absolute;
                            top: 0px;
                            left: 0px;`,l.appendChild(o),l.appendChild(t),document.body.appendChild(l),s=l,o.onclick=()=>{d=!d,d?o.style.cursor="grabbing":o.style.cursor="grab"}}else e==i.close&&document.querySelector(`#${n}`)&&document.querySelector(`#${n}`).remove()};chrome.runtime.onMessage.addListener(e=>{f(e.info),E(e.info),w(e.info)});
