fetch('https://api.mocki.io/v2/c9e5d456/memes')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes acceder a los datos del JSON en la variable "data"
    console.log(data);

    // Ahora, puedes agregar el evento de clic a cada botón para seleccionar un valor aleatorio del elemento correspondiente del JSON
    const btn1 = document.getElementById('random-meme');

    btn1.addEventListener('click', () => {
      const index = Math.floor(Math.random() * data.memes.length);
      document.getElementById('imagen').src = `${data.memes[index]}`;
    });
  })
  .catch(error => console.error(error));
