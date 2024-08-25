class PostMessage {
    #iFrame: HTMLIFrameElement|null =null;
    #targetOrigin: string = '';
    constructor(el:HTMLIFrameElement, targetOrigin: string) {
        this.#iFrame = el;
        this.#targetOrigin = targetOrigin;
        window.addEventListener('message',this.handle,false)  
    }
    sendMessage(message: any) {
        this.#iFrame!.contentWindow!.postMessage(message,this.#targetOrigin);
    }
    private handle(e: MessageEvent) {
        if(e.origin===this.#targetOrigin){
            console.log(e.origin) //父页面URL，这里是http://a.index.com
            console.log(e.source) // 父页面window对象，全等于window.parent/window.top
            console.log(e.data)  //父页面发送的消息
        }
    }
    destroy() {
        window.removeEventListener('message',this.handle,false)  
    }
}
export default PostMessage;