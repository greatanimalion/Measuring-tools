
import './App.css'
import Button from '@mui/material/Button';
import type { Message } from '../types/message';
import Control from './components/Control';
const openMeasureTool = () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        let message = {
            info: 'openMeasureTool',
            type: 'string'
        } as Message
        try {
            if (tabs[0] && tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, message, undefined, (response) => {
                console.log(response);
            })
        } catch (e) {
            console.log(e);
        }
    })

}
const closeMeasureTool = () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        let message = {
            info: 'closeMeasureTool',
            type: 'string'
        } as Message
        if (tabs[0] && tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, message, undefined, (response) => {
            console.log(response);
        })
    })
}

export default function App() {
    console.log(chrome);
    return <>
        <div id="app">
            <Button variant="outlined" onClick={openMeasureTool}>开启</Button>
            <Button onClick={closeMeasureTool} variant="outlined" color="error" style={{ marginLeft: '10px' }}>关闭</Button>
            <Control />
        </div>
    </>;
}