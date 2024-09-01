// import { Button, Input } from "@mui/material";

// import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

export const ElementMessage = () => {
  const [obj, setObj] = useState();
  useEffect(() => {
    window.addEventListener('message', (e) => {
      setObj(e.data)
    }, false)
  })
  let e=obj?Object.keys(obj!):[];
  let i=e.map((item,index)=>{
    if(index==0)return <p key={index}  style={{"fontFamily": "cursive","marginBottom":"10px"}}>
      <strong style={{ color: '#616161' }}>{item}:</strong>{obj![item]}</p>
    return <p key={index}  style={{"fontFamily": "cursive","backgroundColor":" #ececec","padding":"10px","margin":"5px 0","borderRadius": "5px"}}>
      <strong style={{ color: '#616161' }}>{item}:</strong>{obj![item]}</p>
  })
  return <>
    <div style={{ marginTop: '48px' }}>
      {i}
      {!!i?<h1 style={{color:"#616161",marginTop:"20px",textAlign:"center"}}>按住Q键可选中元素，再次按下取消</h1>:<></>}
    </div>

  </>;
}