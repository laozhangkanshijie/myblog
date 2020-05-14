/**
* baseUrl: 域名地址
* routerMode: 路由模式
*/

let baseUrl = ''
// const routerMode = 'history'
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://zh.doglikescat.com:8082'
} else {
  baseUrl = 'http://zh.doglikescat.com:8082'
}

export { baseUrl as BASE_URL }

// export const BASE_URL = process.env.REACT_APP_URL
