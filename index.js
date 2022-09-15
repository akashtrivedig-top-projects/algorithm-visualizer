// let array_to_sorted = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// let array_to_sorted = [20, 19, 18, 17, 16, 15]
let array_to_sorted = [3, 16, 12, 17, 6, 5, 4, 15, 20, 1, 9, 11, 13, 7, 8, 14, 2, 19, 10, 18]

function createGrid() {
  let grid_container = document.getElementById('grid')
  for (let i = 0; i < 420; i++) {
    const block = document.createElement('div')
    block.classList.add('block')
    grid_container.appendChild(block)
  }
}

function createArrayUnder(array) {
  let number_container = document.getElementById('numbers-container')
  document.getElementById('numbers').remove()
  let numbers = document.createElement('div')
  numbers.classList.add('numbers')
  numbers.id = 'numbers'
  number_container.appendChild(numbers)
  array.forEach((number) => {
    let number_div = document.createElement('div')
    number_div.classList.add('number')
    number_div.innerText = number
    numbers.appendChild(number_div)
  })
}

function createGraph(array) {
  let bars_container = document.getElementById('bars-container')
  document.getElementById('bars').remove()
  let bars = document.createElement('div')
  bars.classList.add('bars')
  bars.id = 'bars'
  bars_container.appendChild(bars)

  array.forEach((number) => {
    let bar_container = document.createElement('div')
    bar_container.classList.add('bar-container')
    let bar = document.createElement('div')
    bar.style.height = `${number}em`
    bar.classList.add('bar')
    bars.appendChild(bar_container)
    bar_container.appendChild(bar)
  })
  createArrayUnder(array)
}

function pass(pass, array, callback) {
  for (let j = 1; j < array.length - pass; j++) {
    document.getElementById('counter').innerText = Number(document.getElementById('counter').innerText) + 1
    if (array[j - 1] > array[j]) {
      let temp = array[j]
      array[j] = array[j - 1]
      array[j - 1] = temp
    }
  }
  callback(array)
}
function bubbleSort() {
  let array = array_to_sorted
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => { pass(i, array, createGraph) }, 600 * i)
  }
}
document.getElementById('run').addEventListener('click', () => { bubbleSort() })
document.getElementById('array-length').innerText = array_to_sorted.length
// createGrid()
createGraph(array_to_sorted)