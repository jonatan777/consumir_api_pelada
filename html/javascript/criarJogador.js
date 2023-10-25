if(sessao == null || sessao == "não logado"){
    window.location = "/marcacao/login.html"
}

document.getElementById("Form").innerHTML = `
<br>
<div class="w3-container" style="width: 80%; margin: 4% auto;">

  <div class="w3-container w3-blue">
         <h2>Criar Jogador</h2>
  </div>
<div class="w3-container w3-blue">

<p>
  <label>Url Imagem</label>
  <input class="w3-input" type="text" id="imagem"></p>
</p>

<p>
  <label>Nome</label>
<input class="w3-input" type="text" id="nome"/>
</p>

<p>
<label>posição</label>
<input class="w3-input" type="text" id="posicao"/>
</p>

<p>
  <label>Jogos</label>
<input class="w3-input" type="number" id="jogos"/>
</p>

<p>
<label>Vitórias</label>
<input class="w3-input" type="number" id="vitorias"/>
</p>

<p>
<label>Empates</label>
<input class="w3-input" type="number" id="empates"/>
</p>

<p>
<label>Derrotas</label>
<input class="w3-input" type="number" id="derrotas"/>
</p>

<p>
<label>Expulsão</label>
<input class="w3-input" type="number" id="expulsao"/>
</p>

<p>
<label>Gols</label>
<input class="w3-input" type="number" id="gols"/>
</p>

<p>
<button class="w3-margin" type="submit" onclick="salvarJogador()">salvar Jogador</button>
</p>

</div>
</div>
`;

function salvarJogador(){
// const fileInput = document.querySelector("#fileInput");
var imagem = document.getElementById('imagem').value
var nome = document.getElementById('nome').value
var posicao = document.getElementById('posicao').value
var jogos = document.getElementById('jogos').value
var vitorias = document.getElementById('vitorias').value
var empates = document.getElementById('empates').value
var derrotas = document.getElementById('derrotas').value
var expulsao = document.getElementById('expulsao').value
var gols = document.getElementById('gols').value
var pontos = vitorias * 3 + parseInt(empates);

const jogador = {
    imagen: imagem,
    nome: nome,
    posicao: posicao,
    jogos: jogos,
    vitorias: vitorias,
    empates: empates,
    derrotas: derrotas,
    expulsao: expulsao,
    gols: gols,
    pontos: pontos
  };

  const url = 'https://apipelada.shop/jogadores'
  
  axios.post(url,  jogador, 
      { headers: {'Content-Type': 'application/json',}},
    )
  .then(response => {
  console.log(response.data);
 //  document.getElementById('visualizarRespostaServidor').innerHTML =  '<h3>'+"jogadore criado: "+response.data.nome+'</h3>'
   document.getElementById('Form').innerHTML = `  
  
   <div class="w3-container w3-center" style="width:50%; margin: 4% auto;">
 

   <h3>jogador criado com sucesso</h3>

   <div class="w3-card-4 w3-center w3-margin">
   <img class="imagem" src=${response.data.imagen} alt="Sua imagem" width="50%" height="50%">
   <div class="w3-container w3-center">
    Nome: ${response.data.nome}<br>
    Posição: ${response.data.posicao}
    </div>
    </div> 
    </div>
   `
  })
  .catch(error => {
   console.log(error);
   document.getElementById('visualizarRespostaServidor').innerHTML =  '<h3>'+error+'</h3>'
  });
}