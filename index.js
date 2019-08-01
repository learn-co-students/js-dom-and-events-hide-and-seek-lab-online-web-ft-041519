function getFirstSelector(selector) {
    return document.querySelector(selector)
}
function nestedTarget(nested) {
    return document.querySelectorAll('#nested .target')[0]
}

function deepestChild() {
    return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n){
    const lis = document
        .getElementById('app')
        .querySelectorAll('ul.ranked-list li');
 
    for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1 + n).toString();
    }
}