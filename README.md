<img width="800" height="400" alt="517d50010dfe6e71d17548cae0f6f0dc" src="https://github.com/user-attachments/assets/ae91324d-dc52-4069-8428-299e8fccb661" />

<!DOCTYPE html>
<html>
<head>
  <title>Intro</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: black;
      color: #00ffff;
      font-size: 2em;
      font-family: monospace;
    }
  </style>
</head>
<body>

<div id="text">¡Hola, yo soy Shiloh!</div>

<script>
  const text = document.getElementById("text");
  let toggle = true;

  setInterval(() => {
    if (toggle) {
      text.innerText = "Hello, I am Shiloh!";
    } else {
      text.innerText = "¡Hola, yo soy Shiloh!";
    }
    toggle = !toggle;
  }, 5000);
</script>

</body>
</html>
