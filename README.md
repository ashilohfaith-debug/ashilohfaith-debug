<img width="800" height="400" alt="517d50010dfe6e71d17548cae0f6f0dc" src="https://github.com/user-attachments/assets/ae91324d-dc52-4069-8428-299e8fccb661" />

[shiloh_bilingual_switcher.html](https://github.com/user-attachments/files/27367323/shiloh_bilingual_switcher.html)

<style>
  .screen {
    width: 100%;
    min-height: 340px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }
  .msg {
    position: absolute;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(1.6rem, 5vw, 2.8rem);
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    padding: 2rem;
    opacity: 0;
    transition: opacity 0.5s ease;
    letter-spacing: 0.01em;
    line-height: 1.4;
    pointer-events: none;
    user-select: none;
  }
  .msg.visible {
    opacity: 1;
  }
  .lang-indicator {
    position: absolute;
    bottom: 1rem;
    right: 1.2rem;
    font-size: 11px;
    color: rgba(255,255,255,0.3);
    font-family: monospace;
    letter-spacing: 0.08em;
  }
</style>

<div class="screen" id="screen">
  <div class="msg visible" id="msg-es">¡Hola, yo soy Shiloh!</div>
  <div class="msg" id="msg-en">Hello, I am Shiloh!</div>
  <div class="lang-indicator" id="lang-label">ES</div>
</div>

<script>
  const es = document.getElementById('msg-es');
  const en = document.getElementById('msg-en');
  const label = document.getElementById('lang-label');
  let showingEs = true;

  setInterval(() => {
    if (showingEs) {
      es.classList.remove('visible');
      setTimeout(() => { en.classList.add('visible'); label.textContent = 'EN'; }, 300);
    } else {
      en.classList.remove('visible');
      setTimeout(() => { es.classList.add('visible'); label.textContent = 'ES'; }, 300);
    }
    showingEs = !showingEs;
  }, 2000);
</script>
