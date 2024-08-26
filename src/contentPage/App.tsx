import { useEffect } from 'react';
import './App.css'
import Text from './components/TestContent'
export default function App() {

    useEffect(() => {
        window.addEventListener('message', (e) => {
            console.log(e);
            top?.postMessage('ok',"*")
        }, false)
    })
    return <>
        <div>
            <div id="app">
                <Text />
            </div>
        </div>

    </>;
}