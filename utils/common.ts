import {site} from '@/constants/common'

export function addTitle(title: string){
  return title + ' - ' + site.title
}

export function joinText(arr: any[]){
  return arr && arr.join(' ').trim()
}

export function getCanonical(url: string){
  return process.env.NEXT_PUBLIC_HOST+url
}

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = 'expires='+d.toUTCString()
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
}

export function getCookie(cname: string) {
  const name = cname + '='
  const ca = document.cookie.split(';')
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}
