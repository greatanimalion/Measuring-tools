import './App.css'
import { DragOutlined } from '@ant-design/icons';
export default function App() {
    const drag = () => {
            
    }
    return <>
        <div>
            <div id='drag-icon'>   <DragOutlined onClick={drag} style={{ fontSize: '24px', color: 'rgb(53, 150, 235)', cursor: "grab" }} /></div>
            <div id="app">当前元素信息</div>
        </div>

    </>;
}