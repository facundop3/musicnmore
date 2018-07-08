const blur = {}

function setBlur (el, binding) {
  el.style.filter = (!binding.value) ? 'blur(1.5px)' : 'none'
  el.style.cursor = (!binding.value) ? 'not-allowed' : 'inherit'

  el.querySelectorAll('button').forEach(btn => {
    if (!binding.value) {
      btn.setAttribute('disabled', true)
    } else {
      btn.removeAttribute('disabled')
    }
  })
}

blur.install = function (Vue) {
  Vue.directive('blur', {
    bind (el, binding) {
      setBlur(el, binding)
    }
  })
}

export default blur
