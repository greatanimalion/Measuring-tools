import { eventTypes } from '../types/eventTypes'
import { iframe } from '../const/iframe'
import dragImg from '../assets/drag.png'
import PostMessage from '../utils/postMessage'
import type { Message } from '../types/message'
const timeS = "inject-D" + Date.now().toString()
const style = `
    .${timeS}{
    outline: 1px solid red;
    }
`
const attrs=[
    "top",
    "left",
    "width",
    "height",
    "border",
    "color",
    "backgroundColor",
    "opacity",
    "border-radius",
    "box-shadow",
]
let postMessage: any;
let preEl: Element | null = null
let dragOpen = false;
let dragTarget: HTMLElement | null = null;
//@ts-ignore
let centralEl: HTMLElement | null = null;
let onCneter = false;
const handleMessage = (e: HTMLElement) => {
    const ElementMessage={tagName:''} as CSSStyleDeclaration&{tagName:string}
    ElementMessage.tagName = e.tagName.toLowerCase()
    attrs.forEach((attr) => {
        //@ts-ignore
        ElementMessage[attr] = getComputedStyle(e)[attr]
    })
    //非正常手段
    ElementMessage.width=e.getClientRects()[0].width.toFixed(0)+'px'
    ElementMessage.top=e.getClientRects()[0].top.toFixed(0)+"px"
    ElementMessage.height=e.getClientRects()[0].height.toFixed(0)+'px'
    ElementMessage.left=e.getClientRects()[0].left.toFixed(0)+'px'
    return ElementMessage
}

const MeasureTools = (event: MouseEvent) => {
    if (dragOpen) {
        if (dragTarget) {
            dragTarget.style.top = event.clientY + "px";
            dragTarget.style.left = event.clientX + "px";
        }
    }
    if (onCneter) return
    let cur = document.elementFromPoint(event.clientX, event.clientY)!
    if (cur && (cur.tagName === 'IFRAME' || cur.id === timeS || cur.id === timeS + '-')) return
    if (cur !== preEl) {
        preEl && preEl.classList.remove(timeS)
        preEl = cur
        cur && cur.classList.add(timeS)
        centralEl = cur as HTMLDivElement
    }
}
const centralElClick = (e: KeyboardEvent) => {
    let keyNum = window.event ? e.keyCode : e.which;
    if (keyNum === 81) {
        onCneter = !onCneter;
        if (!onCneter) {
            centralEl = null
        }
        else if(centralEl){ postMessage.send(handleMessage(centralEl))}
    }
}
//@ts-ignore
const handleEvent = (e: string) => {
    if (e = eventTypes.open) {
        window.addEventListener('mousemove', MeasureTools)
    } else if (e = eventTypes.close) {
        window.removeEventListener('mousemove', MeasureTools)
    }
}
//@ts-ignore
const handleCss = (e: string) => {
    if (e == eventTypes.open) {
        window.document.body.addEventListener('keydown', centralElClick)
        const styleEl = document.querySelector(timeS) || window.document.createElement('style')
        styleEl.className = timeS
        styleEl.innerHTML = style
        window.document.head.appendChild(styleEl)
    } else if (e == eventTypes.close) {
        window.document.body.removeEventListener('keydown', centralElClick)
        const styleEl = document.querySelector("." + timeS)
        styleEl && styleEl.remove()
    }
}
let DIV: HTMLDivElement | null = null;
//@ts-ignore
const handlePage = (e: string) => {
    if (e == eventTypes.open) {
        const contentIframe = document.querySelector("#" + timeS) as HTMLIFrameElement || document.createElement("iframe");
        contentIframe.id = timeS;
        contentIframe.style.cssText = `width: ${iframe.width};
                                       height: ${iframe.height};
                                       border: none;
                                       border-radius: 10px;
                                     `;
        const getContentPage = chrome.runtime.getURL('contentPage/index.html');
        contentIframe.src = getContentPage;
        let div = document.createElement("div");
        div.id = timeS;
        div.style.cssText = `position: fixed;
                             z-index: 1000000;
                             top: 10px;
                             left: 10px;
                             box-shadow: 0 0 10px #898989;
                             width: ${iframe.width};
                             height: ${iframe.height};
                             border-radius: 10px;`
        let img = document.createElement('img')
        img.src = dragImg;
        img.id = timeS + '-'
        img.style.cssText = `width: 20px;
                            height: 20px;
                            position: absolute;
                            top: -10px;
                            left: -10px;
                            cursor: grab;`;
        div.appendChild(img);
        div.appendChild(contentIframe);
        document.body.appendChild(div);
        dragTarget = div
        img.onclick = () => {
            dragOpen = !dragOpen;
            if (dragOpen) img.style.cursor = 'grabbing';
            else img.style.cursor = 'grab';
        }
        //@ts-ignore
        postMessage = new PostMessage(contentIframe.contentWindow)
        postMessage.send("hello")
        DIV = div

    } else if (e == eventTypes.close) {
        document.querySelector(`#${timeS}`) && document.querySelector(`#${timeS}`)!.remove()
    }
}
chrome.runtime.onMessage.addListener((request:Message) => {
    if (request.type=='number'&&DIV) { 
        const num = ((+request.info)/100).toFixed(2).toString();        
        DIV.style.opacity = num
    }
    else {
        //css移出|添加
        handleCss(request.info)
        //js关闭|开启
        handleEvent(request.info)
        //iframe移出|添加
        handlePage(request.info)
    }

    return undefined
})