const nomeJogo = "Timo's Mission";
const genero = "Action RPG";
const plataforma = "Web (HTML5)";
const totalFases = 5;
const personagemPrincipal = "Timo";
const descricaoCurta = "Uma curta jornada de um guerreiro em busca da bela donzela.";

document.getElementById("nome__jogo").textContent = nomeJogo;
document.getElementById("genero__jogo").textContent = genero;
document.getElementById("plataforma__jogo").textContent = plataforma;
document.getElementById("total__fases").textContent = totalFases;
document.getElementById("personagem__principal").textContent = personagemPrincipal;
document.getElementById("descricao__jogo").textContent = descricaoCurta;

let temaEscuro = true;
function alternarTema() {
    const btn = document.getElementById("btn-tema");
    temaEscuro = !temaEscuro;
    document.body.classList.toggle("tema-claro", !temaEscuro);
    btn.textContent = temaEscuro ? "🌙 Tema Escuro" : "☀️ Tema Claro";
}