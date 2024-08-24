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
    const handel = (e: boolean) => {
        try {
            if (e) openMeasureTool()
            else closeMeasureTool()
        } catch (e) {
            console.log(e)
        }

    }
    return <>
        <div id="app">
            <button onClick={() => handel(true)}>开启测量工具</button>
            <button onClick={() => handel(false)}>关闭测量工具</button>
        </div>
    </>;
}