const navList = document.querySelector('ul');
const h1 = document.querySelector('h1');

function toggleListVisibility() {
  if (navList.hasAttribute('hidden')) {
    navList.removeAttribute('hidden');
  } else {
    navList.setAttribute('hidden', 'hidden');
  }
}

function adjustListVisibility() {
  if (window.innerWidth < 500) {
    navList.setAttribute('hidden', 'hidden');
    h1.addEventListener('click', toggleListVisibility);
    h1.style.cursor = 'pointer';
  } else {
    navList.removeAttribute('hidden');
    h1.removeEventListener('click', toggleListVisibility);
    h1.style.cursor = 'text';
  }
}

window.addEventListener('load', adjustListVisibility);

window.addEventListener('resize', adjustListVisibility);
