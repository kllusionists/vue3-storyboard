const userPlugin = (store) => {
  store.subscribe(({ type, payload }, state) => {
    // mutation 的格式为 { type, payload }
    if (type === 'USER_INFO_UPDATE') {
      console.log(payload)
    }
  })
}
export default userPlugin
