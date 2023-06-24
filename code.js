document.getElementById('registro-formulario').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente
  
    // Obtén los datos del formulario
    const formData = new FormData(event.target);
    const userData = {
      name: formData.get('name'),
      username: formData.get('username'),
      password: formData.get('password')
    };
  
    fetch('https://kk9kpglwj1.execute-api.us-east-2.amazonaws.com/register', {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message);  // Muestra el mensaje de la respuesta en un alert
      })
      .catch(error => {
        console.error('Error:', error);
      });
    });

document.getElementById('ingresar-formulario').addEventListener('submit', function(event) {
    event.preventDefault();  
  
    const formData = new FormData(event.target);
    const userData = {
      username: formData.get('username'),
      password: formData.get('password')
    };
    

    fetch('https://kk9kpglwj1.execute-api.us-east-2.amazonaws.com/login', {
        method: 'POST',
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(result => {
        if (result.statusCode === 200) {
        // Redirigir al usuario a otra página en caso de inicio de sesión exitoso
        localStorage.setItem('username', userData.username);
        window.location.href = './juego.html';
        } else {
        // Mostrar un mensaje de alerta en caso de error de inicio de sesión
        console.log(result)
    
        alert(result.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

