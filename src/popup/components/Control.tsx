import { Slider } from '@mui/material';
import { debouncedSet ,get } from '../../utils/chormeStorage';
import type { Message } from '../../types/message';
import { useEffect, useState } from 'react';
const opacityChange = (value:number) => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        let message = {
            info: value.toString(),
            type:'number'
        } as Message
        if (tabs[0] && tabs[0].id) chrome.tabs.sendMessage(tabs[0].id, message, undefined, (response) => {
            console.log(response);
        })
    })
    debouncedSet('value', value);
}
export default  function Control() {
    const [value, setValue]=useState(100);
    useEffect(() => {
      get('value').then((value) => {
         if (value) setValue(value as number);
      });
       
    },[value])

    return <>
        <div id='control'>
            <div id='text'>透明度</div><Slider onChange={
                // @ts-ignore
                (e, value) => { opacityChange(value) }
            } defaultValue={value} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    </>

}