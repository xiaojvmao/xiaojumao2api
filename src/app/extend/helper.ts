module.exports = {
  /**
   * 处理成功响应
   * @param ctx
   * @param result
   * @param message
   * @param status
   */
  success(result = null, message = '请求成功', status = 200) {
    this.ctx.body = {
      code: status,
      message,
      data: result,
    };
    this.ctx.status = status;
  },

  /**
   * 处理失败响应(未使用，暂时注释)
   * @param ctx
   * @param code
   * @param message
   */
  // error(code: number, message: string) {
  //   this.ctx.body = {
  //     code,
  //     message,
  //     data: null,
  //   };
  //   this.ctx.status = code;
  // },
};
