'use strict';

function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function deepestChild() {
  const nodes = document.querySelectorAll("#grand-node div");
  return nodes[nodes.length - 1];
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list li");
  for (let i = 0; i < lis.length; i++) {
    const node = lis[i];
    node.innerHTML = parseInt(node.innerHTML, 10) + n;
  }
}