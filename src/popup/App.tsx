import { Slider } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
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

    return <>
        <div id="app">
            <Button variant="outlined" onClick={openMeasureTool}>开启</Button>
            <Button onClick={closeMeasureTool} variant="outlined" color="error" style={{marginLeft: '10px'}}>关闭</Button>
            <div id='control'>
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </div>
        </div>
    </>;
}