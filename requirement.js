function switchTab(tab) {
    document.querySelectorAll('.ptab').forEach(t => { t.className = 'ptab' });
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active-' + tab);
    document.getElementById('panel-' + tab).classList.add('active');
    window.scrollTo({ top: document.querySelector('.pillar-tabs').offsetTop - 80, behavior: 'smooth' });
}