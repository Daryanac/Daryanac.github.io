document.querySelectorAll('[data-starter]').forEach(button => button.addEventListener('click', () => {
 const input = document.getElementById('textMessage');
 input.value = button.dataset.starter; input.focus();
}));
document.getElementById('calmToggle')?.addEventListener('click', event => {
 const button = event.currentTarget;
 const active = button.getAttribute('aria-pressed') !== 'true';
 button.setAttribute('aria-pressed', String(active));
 button.textContent = active ? 'Pause gentle glow' : 'Start gentle glow';
 button.closest('.pause-card').classList.toggle('glowing', active);
});
