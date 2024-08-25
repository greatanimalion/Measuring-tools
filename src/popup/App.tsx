import './App.css'
export default function App() {
    const openMeasureTool = () => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            let message = {
                info: 'openMeasureTool'
            }
            if (tabs[0] && tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, message, undefined, (response) => {
                console.log(response);
            })
        })
    }
    const closeMeasureTool = () => {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (tabs) => {
            let message = {
                info: 'closeMeasureTool'
            }
            if (tabs[0] && tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, message, undefined, (response) => {
                console.log(response);
            })
        })
    }
    let e = false
    const handel = () => {
        e = !e
        if(e){openMeasureTool();console.log("open")}
        else{closeMeasureTool();console.log("close")}
    }
    return <>
        <div id="app">
            <div className="toggle normal" >
                <input id="normal" type="checkbox" />
                <label onClick={handel} className="toggle-item" htmlFor="normal"></label>
            </div>
        </div>
    </>;
}