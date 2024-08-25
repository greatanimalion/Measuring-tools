import './App.css'

import { DragOutlined } from '@ant-design/icons';
export default function App() {

    return <>
        <div>
            <div id="app">
                <div id='drag-icon'>
                    <DragOutlined
                    //@ts-ignore
                        onMouseDown={(e) => {e.target.style.cursor = 'grabbing'}}
                        // @ts-ignore
                        onMouseUp={(e) => e.target.style.cursor = 'grab'}
                        style={{ float: 'right', fontSize: '15px', color: 'rgb(53, 150, 235)', cursor: "grab" }} />
                </div>
                <div>当前元素信息</div>
            </div>
        </div>

    </>;
}