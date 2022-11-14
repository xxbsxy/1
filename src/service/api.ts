import Request from './request/request'
const myRequest = new Request({
  baseURL: 'http://43.143.0.76:3000',
  timeout: 5000,
  interceptors: {
    requestInterceptor: (config: any) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default myRequest
