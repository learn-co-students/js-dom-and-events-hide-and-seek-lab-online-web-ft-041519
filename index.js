function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target')
}
function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < list.length; i++){
      list[i].innerHTML = parseInt(list[i].innerHTML) + parseInt(n);
    }
}
function deepestChild(){
  var deep = document.getElementById('grand-node').querySelectorAll('div')
  return deep[deep.length -1]
}
