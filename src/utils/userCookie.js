import Cookies from 'js-cookie'
export function setUserCookies(obj){
    const arr = Object.entries(obj)
    for (const item of arr) {
        Cookies.set(item[0],item[1],{expires:7})
    }
    return true
}
export function getUserCookies(){
    return{
        email: Cookies.get('email'),
        username: Cookies.get('username'),
        appkey: Cookies.get('appkey'),
        role: Cookies.get('role')
    }
}
export function removeUserCookies(){
    Cookies.remove('email');
    Cookies.remove('username');
    Cookies.remove('appkey');
    Cookies.remove('role');
    return true
}