// returns the first element that matches.
function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function nestedTarget() {
  return document.querySelector('#nested .target')
}


function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}


function increaseRankBy(n) {
  const list = document.querySelectorAll('#app .ranked-list li')
  for (const element of list) {
    element.innerHTML = (parseInt(element.innerHTML) + n).toString();
  }
}
