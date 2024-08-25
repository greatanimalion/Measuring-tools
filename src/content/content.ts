import { eventTypes } from '../types/eventTypes'
import { iframe } from '../const/iframe'
const timeS = "inject-D" + Date.now().toString()
const style = `
    .${timeS}{
    outline: 1px solid red;
    }
`
let preEl: Element | null = null

const  MeasureTools = (event: MouseEvent) => {
    let cur = document.elementFromPoint(event.clientX, event.clientY)!
    if(cur.tagName === 'IFRAME')return 
    if (cur !== preEl) {
        preEl && preEl.classList.remove(timeS)
        preEl = cur
        cur && cur.classList.add(timeS)
        console.log(preEl)
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
        const styleEl = document.querySelector(timeS) || window.document.createElement('style')
        styleEl.className = timeS
        styleEl.innerHTML = style
        window.document.head.appendChild(styleEl)
    } else if (e == eventTypes.close) {
        const styleEl = document.querySelector("." + timeS)
        styleEl && styleEl.remove()
    }
}
//@ts-ignore
const handlePage=(e:string)=>{
    if(e==eventTypes.open){
        const contentIframe =document.querySelector("#"+timeS) as HTMLIFrameElement || document.createElement("iframe");
        contentIframe.id =timeS;
        contentIframe.style.cssText = `width: ${iframe.width};
                                       height: ${iframe.height};
                                       position: fixed;
                                       z-index: 10000002; 
                                       border: none;
                                       top: 10px;
                                       left: 10px;`;
        const getContentPage = chrome.runtime.getURL('contentPage/index.html');
        contentIframe.src = getContentPage;
        document.body.appendChild(contentIframe);
    }else if(e==eventTypes.close){
        document.querySelector(`#${timeS}`) && document.querySelector(`#${timeS}`)!.remove()
    }
}
chrome.runtime.onMessage.addListener((request) => {
    //css移出|添加
    handleCss(request.info)
    //js关闭|开启
    handleEvent(request.info)
    //iframe移出|添加
    handlePage(request.info)
    return undefined
})