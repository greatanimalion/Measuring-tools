// import { Button, Input } from "@mui/material";

import { Fab } from "@mui/material";
import { useEffect, useState } from "react";

export const ElementMessage = () => {
  const [obj, setObj] = useState();
  useEffect(() => {
    window.addEventListener('message', (e) => {
      console.log(e.data);
      setObj(e.data)
    }, false)
  })

  let e=obj?Object.keys(obj!):[];
  let i=e.map((item,index)=>{
    return <p key={index}><strong style={{ color: 'blue' }}>{item}:</strong>{obj![item]}</p>
  })
  return <>
    <div style={{ marginTop: '48px' }}>
      <Fab color="primary" aria-label="add" style={{ position: "fixed", right: 10, height: 47, width: 47 }}>
        复制
      </Fab>
     
      {i}

    </div>

  </>;
}