const getFirstSelector = (selector) => document.querySelector(selector);

const nestedTarget = () => document.querySelector("#nested .target");

const increaseRankBy = (n) => {
  const sel = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < sel.length; i++) {
    sel[i].innerHTML = parseInt(sel[i].innerHTML) + n
  }
};

const deepestChild = () => document.querySelector('div#grand-node div div div div');
