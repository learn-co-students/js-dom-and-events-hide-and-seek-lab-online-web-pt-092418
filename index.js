function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll(".ranked-list");

  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children;

    for (let x = 0; x < children.length; x++){
      children[x].innerHTML = parseInt(children[x].innerHTML) + n;
    }
  }
}

function deepestChild(){
  return document.querySelector('#grand-node div div div div');
}
