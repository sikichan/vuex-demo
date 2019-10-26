export default {
  changeThemeColor ({ commit }, theme) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('changeTheme', theme)
        resolve('主题更换成功')
      }, 500)
    })
  }
}
