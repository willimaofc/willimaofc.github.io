// Função de digitação com cursor piscando
document.addEventListener("DOMContentLoaded", () => {
  const typed = document.getElementById("typed");
  if (!typed) return;

  const text = typed.dataset.text;
  let index = 0;
  let cursorVisible = true;

  // Criar o cursor
  const cursor = document.createElement("span");
  cursor.textContent = "|";
  cursor.style.marginLeft = "2px";
  cursor.style.color = "#39ff14";
  typed.appendChild(cursor);

  function type() {
    typed.innerHTML = text.slice(0, index);
    typed.appendChild(cursor);
    if (index < text.length) {
      index++;
      setTimeout(type, 100); // velocidade de digitação
    } else {
      setTimeout(erase, 3000); // espera antes de apagar
    }
  }

  function erase() {
    typed.innerHTML = text.slice(0, index);
    typed.appendChild(cursor);
    if (index > 0) {
      index--;
      setTimeout(erase, 50); // velocidade de apagar
    } else {
      setTimeout(type, 500); // espera antes de digitar novamente
    }
  }

  // Piscar o cursor
  setInterval(() => {
    cursor.style.visibility = cursorVisible ? "hidden" : "visible";
    cursorVisible = !cursorVisible;
  }, 500);

  // Começa a digitar
  type();
});
