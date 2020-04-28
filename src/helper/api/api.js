import { BASE_URL } from './env'
import { Auth } from './auth'

const CONTENT_TYPE_MAP = {
  json: 'application/json',
  form: 'application/x-www-form-urlencoded'
}

const includes = [
  '/api'
]

const excludes = [
  '/user/registered',
  '/user/login'
]

function withToken (url) {
  return !excludes.some(i => url.startsWith(i)) && includes.some(i => url.startsWith(i))
}

export const TOKEN_KEY = 'HKZF_TOKEN'

export class API {
  static parseQueryString (params, mark = false) {
    return (mark ? '?' : '') + new URLSearchParams(params).toString()
  }

  static async _request (url, params, urlParams, method = 'GET', type = 'json', withToken = false) {
    const args = urlParams ? API.parseQueryString(urlParams, true) : ''
    const promise = (await fetch(BASE_URL + url + args, {
      method,
      body: params,
      headers: {
        ...CONTENT_TYPE_MAP[type] ? ({ 'Content-Type': CONTENT_TYPE_MAP[type] }) : {},
        ...withToken ? { Authorization: Auth.token } : {}
      }
    })).json()

    {
      // 这里是json()的await
      const { status } = await promise
      status === 400 && Auth.clear()
    }

    return promise
  }

  static async get (url, urlParams) {
    return (await API._request(url, undefined, urlParams, undefined, null, withToken(url)))
  }

  static async delete (url, urlParams) {
    return (await API._request(url, undefined, urlParams, 'DELETE', null, withToken(url)))
  }

  static async post (url, params, urlParams) {
    return (await API._request(url, JSON.stringify(params), urlParams, 'POST', undefined, withToken(url)))
  }

  static async postFormData (url, formData, urlParams) {
    return (await API._request(url, formData, urlParams, 'POST', null, withToken(url)))
  }
}
