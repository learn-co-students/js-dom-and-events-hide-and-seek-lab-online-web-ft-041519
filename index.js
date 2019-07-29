function getFirstSelector(selector) {
  // which accepts a selector and returns the first element that matches.
  return document.querySelector(selector)
}

function nestedTarget() {
  // that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)
  // return document.getElementById(nested).getElementsByClassName(target)
  return document.querySelector('div#nested div.target')
}

function increaseRankBy(n) {
  // that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()
  const list = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (parseInt(list[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
//   that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)
  return document.querySelector('div#grand-node div div div div')
}