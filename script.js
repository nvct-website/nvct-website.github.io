fetch('splash.txt')
  .then(response => response.text())
  .then(text => {
    const lines = text
      .split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    document.getElementById('splashText').textContent = randomLine;
  })
  .catch(err => {
    console.error(err);
  });
