import { debounce } from "./debounceThrottle";
function get(key:any){
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    });
}
function set(Object:any){
    console.log('set',Object);
    
    chrome.storage.local.set(Object).then((e)=>{
            console.log("set success",e);
            
    }, (e)=>{
        console.log("Error in set",e);
        
    });;
}
const debouncedSet = debounce(set, 100);
export {
    set,
    get,
    debouncedSet
} ;