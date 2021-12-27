/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'
/**
 * 用户登录
 */
export const login = data => {
  return request({
    method: 'POST',
    // url: '/app/v1_0/authorizations',
    url: '/v1_0/authorizations',
    data
  })
}

// 发送验证码
// 每个手机号，每分钟一次
export const getSmsCode = mobile => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
