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
