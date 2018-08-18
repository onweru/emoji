// jquery style
function elem(el, parent = document) {
  el = parent.querySelector(el);
  return el && typeof(el) == 'object' ? el : false;
}

function elems (els) {
  els = document.querySelectorAll(els);
  return els && typeof(els) == 'object' ? els : false;
}


(function renderEmojis() {
  let el = '';
  let grid = elem('.grid');
  emojis.map(function(emoji, index) {
     let icon = document.createElement('div');
     let title = document.createElement('h4');
     let cell = document.createElement('div');
     cell.classList.add('contain');
     title.innerText = emoji;
     icon.classList.add('em-3x', `em_${emoji}`);
     cell.appendChild(title);
     cell.appendChild(icon)
     grid.appendChild(cell);
  });
})();
