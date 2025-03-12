const checkbox = document.getElementById('cb3-8');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.style.backgroundColor = '#808980'; 
    document.body.style.color = 'black'; 
  } else {
    document.body.style.backgroundColor = '#0A0A0A'; 
    document.body.style.color = 'white'; 
  }
});

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.scrollLeftButton').forEach(button => {
      button.addEventListener('click', function() {
          const containerId = this.getAttribute('data-container'); 
          const container = document.getElementById(containerId); 
          if (container) {
              container.scrollBy({
                  left: -400, // Rola para a esquerda
                  behavior: 'smooth' 
              });
          }
      });
  });

  
  document.querySelectorAll('.scrollRightButton').forEach(button => {
      button.addEventListener('click', function() {
          const containerId = this.getAttribute('data-container'); 
          const container = document.getElementById(containerId); 
          if (container) {
              container.scrollBy({
                  left: 400, // Rola para a direita
                  behavior: 'smooth' 
              });
          }
      });
  });
});  

// Script para a barra de pesquisa
document.querySelector('.input').addEventListener('input', function() {
  const termoPesquisa = this.value.toLowerCase(); // Obtém o termo de pesquisa em minúsculas
  const filmes = document.querySelectorAll('.filme'); // Seleciona todos os filmes

  filmes.forEach(filme => {
      const nomeFilme = filme.getAttribute('data-nome').toLowerCase(); // Obtém o nome do filme em minúsculas
      if (nomeFilme.includes(termoPesquisa)) {
          filme.style.display = 'block'; // Mostra o filme se corresponder à pesquisa
      } else {
          filme.style.display = 'none'; // Esconde o filme se não corresponder
      }
  });
});