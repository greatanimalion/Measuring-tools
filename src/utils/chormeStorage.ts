import { debounce } from "./debounceThrottle";
function get(key:any){
    return new Promise((resolve) => {
        chrome.storage.local.get(key, (result) => {
            resolve(result[key]);
        });
    });
}
function set(Object:any){
    chrome.storage.local.set(Object);
}
const debouncedSet = debounce(set, 100);
export {
    set,
    get,
    debouncedSet
} ;