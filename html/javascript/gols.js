

function buscarGols() {

    const root = document.getElementById('root')
    // const url = 'https://randomuser.me/api/?results=10';
    const url = 'http://181.215.135.83:8188/jogadores_hibernate/gols';
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let jogadores = data;
    console.log(jogadores);
    
    const tableBody = jogadores.map((jogador) => {
      return `<tr>
        <td><img class="w3-circle" src = ${jogador.imagen} width="40" height="40"></td>
        <td>${jogador.nome}</td>
        <td>${jogador.posicao}</td>
        <td>${jogador.jogos}</td>
        <td>${jogador.gols}</td>
      </tr>`
    }).join('')
    
    const table = `<table class="w3-table-all w3-hoverable" style="width: 95%; margin: 1% auto">
      <tr>
        <td>Imagem</td>
        <td>Nome</td>
        <td>Posição</td>
        <td>Jogos</td>
        <td>Gols</td>
      </tr>
      ${tableBody}
    </table>`;
    
    root.insertAdjacentHTML('beforeend', table)
    
    
    })
    .catch(function(error) {
    console.log(error);
    });
    
    }
    
    
    
    