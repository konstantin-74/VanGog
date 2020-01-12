'use strict'

var el = document.getElementsByClassName('menu-item');
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener ('mouseenter', shovSub, false);
  el[i].addEventListener ('mouseleave', hideSub, false);
};

function shovSub() {
  if (this.children.length > 1) {
    this.children[1].style.height = 'auto';
    this.children[1].style.opacity = '1';
    this.children[1].style.overflow = 'visible';
  } else {
    return false;
  }
};

function hideSub() {
  if (this.children.length > 1) {
    this.children[1].style.height = '0';
    this.children[1].style.opacity = '0';
    this.children[1].style.overflow = 'hidden';
  } else {
    return false;
  }
};

