const msToMinutes = {}

function convertMsToMinutes (num) {
  let numbers = (num / 60000).toString().split('.')
  let minutes = numbers[0]
  let seconds = ((Number(numbers[1].slice(0, 2)) * 0.6).toFixed()).toString()
  if (seconds.length === 1) seconds = '0' + seconds
  return `${minutes}:${seconds}`
}

msToMinutes.install = function (Vue) {
  Vue.filter('ms-to-minutes', (num) => {
    return convertMsToMinutes(num)
  })
}

export default msToMinutes
