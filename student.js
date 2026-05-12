function switchForm(form) {
    document.querySelectorAll('.form-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('tab-' + form).classList.add('active');
    document.getElementById('form-' + form).classList.add('active');
}