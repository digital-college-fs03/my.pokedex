console.log('faça a mágica!')
//http://127.0.0.1:3000/index.html

// define uma variável com a URL dos dados
const URL = "http://127.0.0.1:3000/pokemon.json"

async function carregarPokemons() {
    // faz a chamada para a URL de dados
    const response = await fetch(URL)
    // converte a resposta JSON em um array JavaScript
    const pokemons = await response.json()
    // pegar o elemento de contador
    const contador = document.querySelector('#contador')
    contador.innerHTML = pokemons.length

    //captura a div que vai receber os pokemons
    const listPokemons = document.querySelector('#lista-pokemons')
    for (const pokemon of pokemons) {
        const imageName = pokemon.name.toLowerCase()
        const src = `img/pokemons/${imageName}.jpg`
        const row = document.createElement('div')
        row.innerHTML = `<div class="col-lg-3">
            <div class="pokemon panel panel-primary">
                <div class="panel-heading">
                    <h1>${pokemon.name}
                        <span
                            class="label label-primary pull-right">#${pokemon.id}</span>
                    </h1>
                </div>
                <div class="panel-body">
                    <img class="avatar center-block"
                            src="${src}">
                    </div>
                <div class="panel-footer">
                    <div class="text-center">
                        <small>${pokemon.species}</small>
                    </div>
                </div>
            </div>
        </div>`
        listPokemons.appendChild(row)
    }
}

// chama (executa) a função que busca os pokemnons
carregarPokemons()
