const nomeJogo = "Timo's Mission";
const genero = "Action RPG";
const plataforma = "Web (HTML5)";
const totalFases = 5;
const personagemPrincipal = "Timo";
const descricaoCurta = "Uma curta jornada de um guerreiro em busca da bela donzela.";

let idadeDigitada = prompt("Bem-vindo a " + nomeJogo + "! Digite sua idade para continuar:");

const conteudoRestrito = document.getElementById("conteudo-restrito");
const avisoIdade = document.getElementById("aviso-idade");
const idade = parseInt(idadeDigitada);

if (isNaN(idade)) {
    alert("Entrada inválida. O acesso ao jogo será bloqueado.");
    conteudoRestrito.style.filter = "blur(8px)";
    conteudoRestrito.style.pointerEvents = "none";
    avisoIdade.style.display = "block";

} else if (idade >= 12) {
    alert("✅ Acesso liberado! Boa aventura, jogador!");
    conteudoRestrito.style.filter = "none";
    avisoIdade.style.display = "none";

} else {
    alert("⛔ Acesso negado. Você precisa ter pelo menos 12 anos para jogar " + nomeJogo + ".");
    conteudoRestrito.style.filter = "blur(8px)";
    conteudoRestrito.style.pointerEvents = "none";
    avisoIdade.style.display = "block";
}
