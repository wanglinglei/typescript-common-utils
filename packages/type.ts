
/**
 * @description: check int is string
 * @param {unknown} int
 * @return {*}
 */
function isString (int:unknown):int is string{
  return Object.prototype.toString.call(int) === '[object string]';
}
/**
 * @description: check int is number
 * @param {unknown} int
 * @return {*}
 */
function isNumber (int:unknown):int is number {
  return Object.prototype.toString.call(int) === '[object number]';
}

/**
 * @description: check int is boolean
 * @param {unknown} int
 * @return {*}
 */
function isBoolean (int:unknown):int is boolean{
  return Object.prototype.toString.call(int) === '[object boolean]' 
}

/**
 * @description: check int is array
 * @param {unknown} int
 * @return {*}
 */
function isArray (int:unknown):int is [] {
  if(Array.isArray){
    return Array.isArray(int)
  }else {
    return Object.prototype.toString.call(int) === '[object array]'
  }
}

/**
 * @description: check int is boolean
 * @param {unknown} int
 * @return {*}
 */
function isObject(int:unknown):int is object {
  return Object.prototype.toString.call(int) ==='[object object]'
}

/**
 * @description: check int is function
 * @param {unknown} int
 * @return {*}
 */
function isFunction (int:unknown): int is Function {
  return typeof int ==='function'
}
/**
 * @description: check int is Promise
 * @param {unknown} int
 * @return {*}
 */
function isPromise<T> (int:unknown):int is Promise<T> {
  return isObject(int)&& isFunction(int.then)&&isFunction(int.catch)
}

export {
  isString,isArray,isBoolean,isFunction,isNumber,isObject,isPromise
}