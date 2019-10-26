export default {
  themeColor: (state) => {
    const colorMap = {
      white: '白色',
      pink: '粉色',
      grey: '灰色'
    }
    return colorMap[state.themeColor]
  }
}
