/**
 * 响应成功模板
 *
 * @param data
 * @returns
 */
export const resSuccess = (data?: any) => {
  return {
    statusCode: 200,
    message: 'success',
    data: data || 'no data',
  };
};

/**
 * 响应失败模板
 *
 * @param error
 * @returns
 */
export const resError = (error: any) => {
  return {
    statusCode: 500,
    message: 'server error',
    data: error || 'no data',
  };
};
