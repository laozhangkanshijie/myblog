const TOKEN_KEY = 'BLOG_TOKEN'

/**
 * 用户身份验证实体类。
 */
export class Auth {
  /**
     * 获取用户登录后的 Token。
     */
  static get token () {
    return localStorage[TOKEN_KEY]
  }

  /**
     * 存储用户登陆之后的 Token。
     */
  static set token (value) {
    localStorage[TOKEN_KEY] = value
  }

  /**
     * 清除当前登录状态。
     */
  static clear () {
    localStorage.removeItem(TOKEN_KEY)
  }

  /**
     * 用户是否登录。
     */
  static get isAuth () {
    return !!Auth.token
  }
}
