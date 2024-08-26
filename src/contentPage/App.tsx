import { useEffect } from 'react';
import './App.css'

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
                <div>当前元素信息</div>
            </div>
        </div>

    </>;
}