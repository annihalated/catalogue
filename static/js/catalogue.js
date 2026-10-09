const thumbnails = [...document.querySelectorAll('.thumbnail')];
const photo = document.getElementById('gallery-image');
function selectPhoto(button) {
  photo.src = button.dataset.image;
  photo.alt = button.dataset.alt;
  document.getElementById('gallery-caption').textContent = button.dataset.caption;
  document.getElementById('gallery-number').textContent = `0${thumbnails.indexOf(button) + 1} / 03`;
  thumbnails.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
}
thumbnails.forEach((button, index) => {
  button.addEventListener('click', () => selectPhoto(button));
  button.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? thumbnails.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + thumbnails.length) % thumbnails.length;
    thumbnails[next].focus();
    selectPhoto(thumbnails[next]);
  });
});
// Hugo's local server cannot collect Netlify submissions. Keep entered details
// on screen rather than sending a POST that would fail or imply they were saved.
const form = document.getElementById('interest-form');
if (form && ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname)) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    let note = document.getElementById('preview-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'preview-note';
      note.className = 'preview-note';
      note.setAttribute('role', 'status');
      form.appendChild(note);
    }
    note.textContent = 'Local preview: your details have not been sent. Submission collection works after deploying to Netlify with Forms enabled.';
  });
}
