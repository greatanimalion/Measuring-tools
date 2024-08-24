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


const handleEvent = (event: MouseEvent) => {
    let cur = document.elementFromPoint(event.clientX, event.clientY)!
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
        console.log(e);
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