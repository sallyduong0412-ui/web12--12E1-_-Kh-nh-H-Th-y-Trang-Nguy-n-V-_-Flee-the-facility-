
function openModal(src) {
  const modal = document.getElementById('imgModal');
  const img = document.getElementById('modalImg');
  img.src = src;
  modal.style.display = 'block';
  res.classList.add("w3-animate-opacity");


}


function closeModal() {
  const modal = document.getElementById('imgModal');
  modal.style.display = 'none';
}


function fakeSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();


  const name = document.getElementById('name').value || 'Người dùng';
  const res = document.getElementById('bookingResult');


  res.style.display = 'block';
  res.innerHTML =
    `<div class="w3-panel w3-green w3-round">
       Cảm ơn <strong>${escapeHtml(name)}</strong>!<br>
       (Đây chỉ là giả lập) — thông tin đã "gửi".
     </div>`;


  document.getElementById('bookingForm').reset();
  return false;
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[m]));
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href.indexOf('#') !== 0) return;


      e.preventDefault();
      const el = document.getElementById(href.substring(1));


      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });


        const mm = document.getElementById('mobileMenu');
        if (mm && !mm.classList.contains('w3-hide')) mm.classList.add('w3-hide');
      }
    });
  });
});

function toggleMenu() {
  const mm = document.getElementById('mobileMenu');
  if (!mm) return;


  if (mm.classList.contains('w3-hide')) mm.classList.remove('w3-hide');
  else mm.classList.add('w3-hide');
}

window.addEventListener('click', e => {
  const modal = document.getElementById('imgModal');
  if (!modal) return;
  if (e.target === modal) closeModal();
});



