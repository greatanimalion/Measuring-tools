import{j as o,c as i}from"../js/client-B7nMxStY.js";function a(){const r=()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{let l={info:"openMeasureTool"};e[0]&&e[0].id&&chrome.tabs.sendMessage(e[0].id,l,void 0,n=>{console.log(n)})})},t=()=>{chrome.tabs.query({active:!0,currentWindow:!0},e=>{let l={info:"closeMeasureTool"};e[0]&&e[0].id&&chrome.tabs.sendMessage(e[0].id,l,void 0,n=>{console.log(n)})})};let s=!1;const c=()=>{s=!s,s?(r(),console.log("open")):(t(),console.log("close"))};return o.jsx(o.Fragment,{children:o.jsx("div",{id:"app",children:o.jsxs("div",{className:"toggle normal",children:[o.jsx("input",{id:"normal",type:"checkbox"}),o.jsx("label",{onClick:c,className:"toggle-item",htmlFor:"normal"})]})})})}i.createRoot(document.getElementById("root")).render(o.jsx(a,{}));
