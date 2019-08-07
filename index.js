function getFirstSelector(selector) { 
    return document.querySelector(selector); } 

function nestedTarget() { 
    return document.querySelector( '#nested .target' ); }

function deepestChild() { 
    return document.querySelector( '#grand-node div div div div' ); }

function increaseRankBy(n) { 
    
    const holder = document.querySelectorAll('.ranked-list');
    
    for (let i = 0; i < holder.length; i++) {
        let chi = holder[i].children;

        for (let j = 0; j < chi.length; j++) {
            chi[j].innerHTML = parseInt(chi[j].innerHTML) + n   
        }

      } 
    
    }
