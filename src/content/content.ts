const timeS = "inject-css-D" + Date.now().toString()
enum eventTypes {
    close = 'closeMeasureTool',
    open = 'openMeasureTool'
}
const style = `
    .${timeS}{
    outline: 1px solid red;
    }
`
let preEl: Element | null = null

console.log('content file')
const init = () => {
  const addIframe = (id: string, pagePath: string) => {
    const contentIframe = document.createElement("iframe");
    contentIframe.id = id;
    contentIframe.style.cssText = `width: 300px;
                                   height: 500px;
                                   position: fixed;
                                   z-index: 10000002; 
                                   border: none;
                                   top: 10px;
                                   left: 10px;`;
    const getContentPage = chrome.runtime.getURL(pagePath);
    contentIframe.src = getContentPage;
    document.body.appendChild(contentIframe);
  }

  addIframe('content-start-iframe', 'contentPage/index.html')
}

// 判断 window.top 和 self 是否相等，如果不相等，则不注入 iframe
// if (window.top === window.self) {
//     init();
//   }
const handleEvent = (event: MouseEvent) => {
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
const MeasureTools = (e: string) => {

    if (e = eventTypes.open) {
        init()
        window.addEventListener('mousemove', handleEvent)
    } else if (e = eventTypes.close) {
        window.removeEventListener('mousemove', handleEvent)
    }
}
//@ts-ignore
const handeCss = (e: string) => {
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
chrome.runtime.onMessage.addListener((request) => {
    //css移出|添加
    handeCss(request.info)
    //js关闭|开启
    MeasureTools(request.info)

    return undefined
})