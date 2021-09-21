var JS_jogadores = [];

function calculaPontos (jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
};

function adicionarVitoria(i) {
    var jogador = JS_jogadores[i];
    jogador.vitorias += 1;
    exibirJogadores(JS_jogadores);
};

function adicionarEmpate(i) {
    var jogador = JS_jogadores[i];
    jogador.empates += 1;
    exibirJogadores(JS_jogadores);
};

function adicionarDerrota(i) {
    var jogador = JS_jogadores[i];
    jogador.derrotas += 1;
    exibirJogadores(JS_jogadores);
}

function exibirJogadores(jogadores) {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].pontos = calculaPontos(jogadores[i]);
    }
    var HTML_jogador = '';
    for (var i= 0; i < jogadores.length; i++) {
        HTML_jogador += `
            <tr>
                <td>${jogadores[i].nome}</td>
                <td>${jogadores[i].vitorias}</td>
                <td>${jogadores[i].empates}</td>
                <td>${jogadores[i].derrotas}</td>
                <td>${jogadores[i].pontos}</td>
                <td class="vitoria"><button onClick="adicionarVitoria(${i})" class="botaoVitoria">Vitória</button></td>
                <td class="empate"><button onClick="adicionarEmpate(${i})" class="botaoEmpate">Empate</button></td>
                <td class="derrota"><button onClick="adicionarDerrota(${i})" class="botaoDerrota">Derrota</button></td>
            </tr>
        `;
    };
    var HTML_tabelaJogadores = document.querySelector('#tabelaJogadores');
    HTML_tabelaJogadores.innerHTML = HTML_jogador;
}

function novoJogador() {
    var HTML_novoJogador = document.querySelector('#novoJogador').value;
    var jogador = {
        nome: HTML_novoJogador.toUpperCase(),
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    };
    JS_jogadores.push(jogador);
    document.querySelector('#novoJogador').value = '';
    exibirJogadores(JS_jogadores);
};