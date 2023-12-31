

function buscarGols() {

    const root = document.getElementById('root')
    // const url = 'https://randomuser.me/api/?results=10';
    const url = 'https://apipelada.shop/jogadores_hibernate/gols';
    
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
    let jogadores = data;
    console.log(jogadores);
    var i = 1;
    const tableBody = jogadores.map((jogador) => {
      return `<tr>
        <td>${i++}</td>
        <td><img class="w3-circle" src = ${jogador.imagen} width="40" height="40"></td>
        <td>${jogador.nome}</td>
        <td>${jogador.posicao}</td>
        <td>${jogador.jogos}</td>
        <td>${jogador.gols}</td>
      </tr>`
    }).join('')
    
    const table = `<table class="w3-table-all w3-hoverable" style="width: 95%; margin: 1% auto">
      <tr>
        <td>Indice</td>
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