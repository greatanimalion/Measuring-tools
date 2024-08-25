import './App.css'
import { iframe } from '../const/iframe';
import { DragOutlined } from '@ant-design/icons';
export default function App() {
    const drag = () => {

    }
    return <>
        <div id="app" style={{ width: iframe.width, height: iframe.height }}>
            <div id='drag-icon'><DragOutlined onClick={drag} style={{ fontSize: '24px', color: 'rgb(53, 150, 235)', cursor: "grab" }} /></div>
            <div>当前元素信息</div>
        </div>
    </>;
}