function pesquisar() {
   // obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você não buscou por um atleta</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

// inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

// itera sobre cada dado da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes compoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
         </div>
    `;
    }

}

if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>"
}

// atribui os resultados gerados à secção HTML
section.innerHTML = resultados;
}