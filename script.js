const occupations = ['Medicine & Health', 'Law & Justice', 'Engineering', 'Technology & ICT', 'Creative Arts'];
const slideEls = document.querySelectorAll('.slide');
const dotsEl = document.getElementById('dots');
const occEl = document.getElementById('occName');
const counterEl = document.getElementById('counter');
let cur = 0;

occupations.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.onclick = () => go(i);
    dotsEl.appendChild(d);
});

function go(idx) {
    slideEls[cur].classList.remove('active');
    dotsEl.children[cur].classList.remove('active');
    cur = idx;
    slideEls[cur].classList.add('active');
    dotsEl.children[cur].classList.add('active');
    occEl.textContent = occupations[cur];
    counterEl.textContent = String(cur + 1).padStart(2, '0') + ' / 0' + occupations.length;
}

setInterval(() => go((cur + 1) % occupations.length), 4200);