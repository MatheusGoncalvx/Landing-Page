document.addEventListener("DOMContentLoaded", function () {
    getProjects();
  });
  
  function getProjects() {
    const urlGitHubAPI = 'https://api.github.com/users/MatheusGoncalvx/repos';
    var carregandoElement = document.getElementById('carregando');
  
    fetch(urlGitHubAPI, {
      method: 'GET',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        showProjects(data);
        carregandoElement.style.display = 'none';
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        carregandoElement.style.display = 'none'; // Certifique-se de esconder em caso de erro também
      });
  }
  
  function showProjects(data) {
    var listElement = document.querySelector('.meus-projetos-lista'); // Alterei para '.meus-projetos'
    for (let i = 0; i < data.length; i++) {
      let div = document.createElement('div');
      div.className = 'projeto'; // Adicione esta linha
      let a = document.createElement('a');
      a.href = data[i]['html_url'];
      a.target = '_blank';
      a.title = data[i]['description'];
      let linkText = document.createTextNode(data[i]['name']);
      a.appendChild(linkText);
      div.appendChild(a);
      listElement.appendChild(div);
    }
  }
  