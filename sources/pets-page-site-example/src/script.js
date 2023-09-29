const options = document.querySelectorAll('.menu>.options>ul>li')
const content = document.querySelector('.content')
const mark = document.querySelector('.mark')

options.forEach((item, i) => (
  item.addEventListener('click', () => {
    options.forEach(e => e.classList.remove('selected'))
    item.classList.add('selected')
    mark.style = `top: calc(${i} * 30% - 6px)`
  })
))

const isNear = i => {
  const position = content.scrollTop
  const step = content.offsetHeight - 50
  return position >= i * step && position < (i + 1) * step
}

content.addEventListener('scroll', () => {
  options.forEach(e => e.classList.remove('selected'))
  const found = Array
    .from(options)
    .filter((_, i) => isNear(i))
    [0]
  found.classList.add('selected')
  const index = Array.from(options).indexOf(found)
  mark.style = `top: calc(${index} * 30% - 6px)`
})
