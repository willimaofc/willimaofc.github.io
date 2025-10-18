// Simple typing effect for the title (configurable, lightweight)
(function(){
  const el = document.getElementById('typed');
  if(!el) return;
  const text = el.dataset.text || el.textContent || 'Portfolio';
  const speed = 40; // ms per char
  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.parentNode.insertBefore(cursor, el.nextSibling);
  function type(){
    if(i<=text.length){
      el.textContent = text.slice(0,i);
      i++;
      setTimeout(type, speed);
    } else {
      // keep cursor blinking
    }
  }
  document.addEventListener('DOMContentLoaded', type);
  // If DOMContentLoaded already fired
  if (document.readyState === 'interactive' || document.readyState === 'complete') type();
})();
