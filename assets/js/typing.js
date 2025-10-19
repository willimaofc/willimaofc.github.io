// typing.js - smooth typing for header (non-blocking)
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById('typed');
  if (!el) return;
  const text = el.dataset.text || el.textContent || 'Wilton Lima — Cybersecurity Portfolio';
  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'type-cursor';
  cursor.textContent = '┃';
  cursor.style.color = '#9fd9a8';
  cursor.style.marginLeft = '6px';
  cursor.style.opacity = '1';
  el.appendChild(cursor);

  function type(){
    if (i <= text.length){
      el.textContent = text.slice(0,i);
      el.appendChild(cursor);
      i++;
      setTimeout(type, 60 + Math.random()*40);
    } else {
      // keep cursor blinking
      setInterval(()=>{ cursor.style.opacity = cursor.style.opacity === '1' ? '0.12' : '1'; }, 600);
    }
  }
  type();
});
