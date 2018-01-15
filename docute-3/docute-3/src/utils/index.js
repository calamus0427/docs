export function findMin(array, key) {
  const min = Math.min(...array.map(item => item[key]))
  return array.filter(item => {
    return item[key] === min
  })
}

export function findMax(array, key) {
  const max = Math.max(...array.map(item => item[key]))
  return array.filter(item => {
    return item[key] === max
  })
}

export function isType(obj, type) {
  return `[object ${type}]` === Object.prototype.toString.call(obj)
}

export function fetchCredentials(url) {
  const crossDomain =
    /^https?:\/\//.test(url) && !new RegExp(`^${location.origin}`).test(url)
  return crossDomain ? 'omit' : 'include'
}
