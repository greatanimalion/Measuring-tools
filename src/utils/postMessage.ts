class PostMessage {
    iFrame: Window |null =null;
    targetOrigin: string|undefined = '';
    constructor(el:Window,targetOrigin?: string) {
        this.iFrame = el;
        this.targetOrigin =targetOrigin;
        window.addEventListener('message',this.handle,false)  
    }
    send(message: any) {
        if(this.targetOrigin)this.iFrame!.postMessage(message,this.targetOrigin);
        else this.iFrame!.postMessage(message,'*');
    }
    private handle(e: MessageEvent) { 
        if(e.data.source!="react-devtools-content-script")console.log(e);
        
    }
    destroy() {
        window.removeEventListener('message',this.handle,false)  
    }
}
export default PostMessage;
