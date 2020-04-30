let validate = {
  /**
   * 密码校验：
   *1、密码至少包含大小写字母、数字和特殊字符
   *3、长度大于等于8-20位
   * @export
   * @param {*} passwd
   */
  validatePasswd: function (passwd) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+`\-={}:";'<>,.\/]).{8,20}/
    return reg.test(passwd);
  },

  /**
   * 用户名校验
   *1、以字母开头
   *2、由数字、26个英文字母或者下划线组成的字符串
   *3、长度大于等于6
   * @export
   * @param {*} username
   */
  validateUsername: function (username) {
    const reg = /^[A-Za-z][\w]{5,}$/;
    return reg.test(username);
  }
}

export default validate
