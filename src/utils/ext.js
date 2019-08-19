// 根据数据访问路径设置对象的值
function setData (obj, key, value) {
  let regex = /([\w$]+)|\[(:\d)\]/g
  let patten = key.match(regex)

  let result = obj
  for(let i = 0; i < patten.length - 1; i++) {
      let key = patten[i]
      result = result[key]
  }

  result[patten[patten.length - 1]] = value
}

export default {setData}