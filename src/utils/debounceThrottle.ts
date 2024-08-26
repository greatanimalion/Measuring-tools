/**
 * @param  {Function}  fn num a function need to become a debounce function
 * @param  {Number}  num debounce time
 * @return {function} return  debounce Function
 * @author lb
 * @description null
 * @example let fn=debounce(()=>{},100); fn()
*/
export function debounce(fn: Function, timer: number): Function {
  let _time: number | null;
  return function ():void {
    _time&&clearTimeout(_time);
    _time = setTimeout(fn, timer)
  }
}

export function throttle(fn: Function, timer: number): Function {
  let _canDo: boolean = true;
  return (): void => {
    if (_canDo) {
      _canDo=false;
      setTimeout(() => {
        fn();
         _canDo = true;
      }, timer);
    }
    else return
  }
}