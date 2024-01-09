// Función para cargar una imagen
function loadImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = function(event) {
      resolve(event.target.result);
    };
    
    reader.onerror = function() {
      reject(new Error('Error al cargar la imagen'));
    };
    
    reader.readAsDataURL(file);
  });
}

// Imagen
function sendImage(imageData) {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://raw.githubusercontent.com/Jxtxn17/BaileyBot-MD/master/src/JSON/Gordo-PEPON.json', true);
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log('Imagen enviada con éxito');
    }
  };
  
  xhr.onerror = function() {
    console.error('Error al enviar la imagen');
  };
  
  xhr.send(imageData);
}

// Uso del código
const fileInput = document.getElementById('fileInput'); // Elemento de entrada de archivo
fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    loadImage(file)
      .then((imageData) => sendImage(imageData))
      .catch((error) => console.error(error));
  }
});