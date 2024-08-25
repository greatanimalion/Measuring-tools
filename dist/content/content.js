var n=(o=>(o.close="closeMeasureTool",o.open="openMeasureTool",o))(n||{});const s={height:"400px",width:"300px"},t="inject-D"+Date.now().toString(),r=`
    .${t}{
    outline: 1px solid red;
    }
`;let i=null;const c=o=>{let e=document.elementFromPoint(o.clientX,o.clientY);e&&e.tagName==="IFRAME"||e!==i&&(i&&i.classList.remove(t),i=e,e&&e.classList.add(t))},d=o=>{n.open?window.addEventListener("mousemove",c):n.close&&window.removeEventListener("mousemove",c)},m=o=>{if(o==n.open){const e=document.querySelector(t)||window.document.createElement("style");e.className=t,e.innerHTML=r,window.document.head.appendChild(e)}else if(o==n.close){const e=document.querySelector("."+t);e&&e.remove()}},a=o=>{if(o==n.open){const e=document.querySelector("#"+t)||document.createElement("iframe");e.id=t,e.style.cssText=`width: ${s.width};
                                       height: ${s.height};
                                       position: fixed;
                                       z-index: 10000002; 
                                       border: none;
                                       top: 10px;
                                       left: 10px;`;const l=chrome.runtime.getURL("contentPage/index.html");e.src=l,document.body.appendChild(e)}else o==n.close&&document.querySelector(`#${t}`)&&document.querySelector(`#${t}`).remove()};chrome.runtime.onMessage.addListener(o=>{m(o.info),d(o.info),a(o.info)});
