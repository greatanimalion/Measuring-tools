import{i as s}from"../js/iframe-B894oyg8.js";var n=(e=>(e.close="closeMeasureTool",e.open="openMeasureTool",e))(n||{});const t="inject-D"+Date.now().toString(),r=`
    .${t}{
    outline: 1px solid red;
    }
`;let i=null;const l=e=>{let o=document.elementFromPoint(e.clientX,e.clientY);o.tagName!=="IFRAME"&&o!==i&&(i&&i.classList.remove(t),i=o,o&&o.classList.add(t),console.log(i))},d=e=>{n.open?window.addEventListener("mousemove",l):n.close&&window.removeEventListener("mousemove",l)},m=e=>{if(e==n.open){const o=document.querySelector(t)||window.document.createElement("style");o.className=t,o.innerHTML=r,window.document.head.appendChild(o)}else if(e==n.close){const o=document.querySelector("."+t);o&&o.remove()}},a=e=>{if(e==n.open){const o=document.querySelector("#"+t)||document.createElement("iframe");o.id=t,o.style.cssText=`width: ${s.width};
                                       height: ${s.height};
                                       position: fixed;
                                       z-index: 10000002; 
                                       border: none;
                                       top: 10px;
                                       left: 10px;`;const c=chrome.runtime.getURL("contentPage/index.html");o.src=c,document.body.appendChild(o)}else e==n.close&&document.querySelector(`#${t}`)&&document.querySelector(`#${t}`).remove()};chrome.runtime.onMessage.addListener(e=>{m(e.info),d(e.info),a(e.info)});
