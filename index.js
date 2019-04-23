function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target")
}


function increaseRankBy(n) {
  let lists = document.querySelectorAll(".ranked-list");

  for (let i = 0; i < lists.length; i++) {
    let children = lists[i].children;

    for (let j = 0; j < children.length; j++){
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    }
  }
} //end of function

  function deepestChild() {
    let node = document.getElementById('grand-node')
    let childnode = node.children[0]

    while (childnode) {

      node = childnode
      childnode = node.children[0]
    }
    return node
  }
