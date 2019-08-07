 let kg = {
    chooseLocation(params) {
        return new Promise((success, fail)=>{
          wx.chooseLocation({
            ...params,
            success,
            fail,
          })
        })
      },
}
export default kg