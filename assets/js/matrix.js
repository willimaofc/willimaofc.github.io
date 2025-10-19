// matrix.js - lightweight Matrix-style background, subtle and optimized
(function(){
  const canvas = document.getElementById('matrix');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  let cols = Math.floor(window.innerWidth / 14);
  let fontSize = 14;
  let drops = new Array(cols).fill(0);

  function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(window.innerWidth / 14);
    fontSize = Math.max(12, Math.floor(window.innerWidth / 100));
    drops = new Array(cols).fill(0);
  }
  window.addEventListener('resize', resize);
  resize();

  const chars = "01⎈✱▒▓▌▐█".split('');
  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.font = fontSize + 'px monospace';
    for (let i=0;i<drops.length;i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillStyle = 'rgba(57,255,20,0.12)';
      ctx.fillText(text, x, y);
      if (y > canvas.height && Math.random() > 0.975) drops[i]=0;
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
