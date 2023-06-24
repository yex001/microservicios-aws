document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos del DOM
    const numberInput = document.querySelector('input[type="text"]');
    const playButton = document.querySelector('button');
    const saldoElement = document.querySelector('p');
    const displayNumber = document.querySelector('h1');

    // Obtener el nombre de usuario del localStorage
    const username = localStorage.getItem('username');
  
    // Función para llamar a la función Lambda
    function llamarLambda(numero, usuario) {
      const userData = {
        username: usuario,
        number: numero
      };
  
      fetch('https://kk9kpglwj1.execute-api.us-east-2.amazonaws.com/play', {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(result => {
        // Actualizar saldo y mostrar mensaje
        saldoElement.textContent = 'Saldo: $' + result.saldo;
        displayNumber.textContent = 'Número: ' + result.random_number;
        alert(result.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  
    // Evento de escucha para el botón "Jugar"
    playButton.addEventListener('click', function() {
      const numero = parseInt(numberInput.value);
  
      if (isNaN(numero)) {
        alert('Por favor, ingrese un número válido');
        return;
      }
  
      llamarLambda(numero, username);
    });
  
    // Mostrar el nombre de usuario y saldo inicial
    document.querySelector('.username').textContent = 'Usuario: ' + username;
    saldoElement.textContent = 'Saldo: $';
  });
  