// Lista com 3 jogadores
let personagem = ["", "", ""]; // Array para armazenar os nomes dos personagens do jogador
let viloes = ["", "", ""]; // Array para armazenar os nomes dos vilões

let forcaPersonagem = 0; // Variável para armazenar a força total do time do jogador
let forcaViloes = 0; // Variável para armazenar a força total do time dos vilões

let forcaPersonagemIndividual = [0, 0, 0]; // Array para armazenar a força de cada personagem
let forcaViloesIndividual = [0, 0, 0]; // Array para armazenar a força de cada vilão

const personagensPossiveis = ["Deku", "Bakugo", "Todoroki", "Uraraka", "Iida", "Tsuyu", "Kirishima", "Yaoyorozu", "Tokoyami", "Tamaki"]; // Array com os personagens possíveis para o jogador escolher

const informacoesJogador = document.getElementById("informacoesJogador"); // Obtém o elemento HTML para exibir informações do jogador
const informacoesComputador = document.getElementById("informacoesComputador"); // Obtém o elemento HTML para exibir informações do computador
const resultadoBtn = document.getElementById("resultadoBtn"); // Obtém o botão para exibir o resultado final
const resultadoFinal = document.getElementById("resultadoFinal"); // Obtém o elemento HTML para exibir o resultado final completo

// Função para iniciar a batalha
function iniciarBatalha() {

    // Loop para o jogador escolher 3 personagens
    for (let i = 0; i < 3; i++) {
        let escolhaValida = false; // Variável para controlar se a escolha do jogador é válida
        while (!escolhaValida) {
            // Solicita ao jogador que digite o número do personagem escolhido
            let escolhaPersonagemNumero = prompt("Digite o número do personagem escolhido " + (i + 1) + ". Opções:\n1-Deku, 2-Bakugo, 3-Todoroki, 4-Uraraka, 5-Iida, 6-Tsuyu, 7-Kirishima, 8-Yaoyorozu, 9-Tokoyami, 10-Tamaki");
            let escolhaPersonagem; // Variável para armazenar o nome do personagem escolhido
    
            // Switch para atribuir o nome do personagem com base no número digitado
            switch (escolhaPersonagemNumero) {
                case "1": escolhaPersonagem = "Deku"; break;
                case "2": escolhaPersonagem = "Bakugo"; break;
                case "3": escolhaPersonagem = "Todoroki"; break;
                case "4": escolhaPersonagem = "Uraraka"; break;
                case "5": escolhaPersonagem = "Iida"; break;
                case "6": escolhaPersonagem = "Tsuyu"; break;
                case "7": escolhaPersonagem = "Kirishima"; break;
                case "8": escolhaPersonagem = "Yaoyorozu"; break;
                case "9": escolhaPersonagem = "Tokoyami"; break;
                case "10": escolhaPersonagem = "Tamaki"; break;
                default: escolhaPersonagem = null; // Define como null se a entrada for inválida
            }
    
            // Verifica se o personagem escolhido está na lista de personagens possíveis
            if (personagensPossiveis.includes(escolhaPersonagem)) {
                personagem[i] = escolhaPersonagem; // Armazena o nome do personagem no array
                escolhaValida = true; // Define a escolha como válida para sair do loop while
            } else {
                // Exibe um alerta de opção inválida
                alert("Opção inválida. Por favor, escolha um número da lista.");
            }
        }

        // Calcula a força de cada jogador e armazena no array
        forcaPersonagemIndividual[i] = Math.floor(Math.random() * 100) + 1;
        forcaPersonagem += forcaPersonagemIndividual[i]; // Soma a força ao total
    }
    
    // Loop para escolher 3 vilões aleatórios para o computador
    for (let i = 0; i < 3; i++) {
        let indiceAleatorio; // Variável para armazenar o índice aleatório do vilão escolhido
        let vilaoEscolhido; // Variável para armazenar o nome do vilão escolhido
        let vilaoUnico = false; // Variável para controlar se o vilão já foi escolhido
    
        // Array com os vilões possíveis
        viloesPossiveis = ["All For One", "Dabi", "Himiko Toga", "Tomura Shigaraki", "Kurogiri", "Overhaul", "Mr. Compress", "Stain", "Twice", "Lady Nagant"];
    
        // Loop para garantir que o vilão escolhido seja único
        while(!vilaoUnico) {
            indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length); // Gera um índice aleatório
            vilaoEscolhido = viloesPossiveis[indiceAleatorio]; // Obtém o nome do vilão com base no índice
    
            // Verifica se o vilão já foi escolhido
            if (!viloes.includes(vilaoEscolhido)) {
                viloes[i] = vilaoEscolhido; // Armazena o nome do vilão no array
                vilaoUnico = true; // Define como verdadeiro para sair do loop while
            }
        }
    
        // Calcula a força de cada vilão e armazena no array
        forcaViloesIndividual[i] = Math.floor(Math.random() * 100) + 1;
        forcaViloes += forcaViloesIndividual[i]; // Soma a força ao total
    }
    
    alert("Vilões: " + viloes); // Exibe um alerta com os vilões escolhidos

    // Comparar os dois itens para saber quem venceu
    if (forcaPersonagem > forcaViloes) {
        // Se a força do time do jogador for maior, o jogador vence
        alert("Seu time venceu!");
        alert("A força do seu time foi: " + forcaPersonagem);
    } else {
        if (forcaPersonagem < forcaViloes) {
            // Se a força do time do computador for maior, o computador vence
            alert("Seu time perdeu!")
            alert("A força do time rival foi: " + forcaViloes);
        } else {
            // Se as forças forem iguais, é empate
            alert("Os dois times tem a mesma força!" + forcaPersonagem + forcaViloes + "Empate.")
        }
        resultadoBtn.style.display = "block"; // Exibe o botão após o término da batalha
    }
}

// Função para exibir o resultado detalhado da batalha
function verResultado() {
    // Obtém o corpo da tabela do jogador
    const tabelaJogador = document.getElementById("tabelaJogador").getElementsByTagName('tbody')[0];
    
    // Obtém o corpo da tabela do computador
    const tabelaComputador = document.getElementById("tabelaComputador").getElementsByTagName('tbody')[0];

    const totalJogadorElement = document.querySelector("#tabelaJogador tfoot td:last-child");
    const totalComputadorElement = document.querySelector("#tabelaComputador tfoot td:last-child");
    
    tabelaJogador.innerHTML = ""; // Limpa o conteúdo da tabela do jogador
    tabelaComputador.innerHTML = ""; // Limpa o conteúdo da tabela do computador

    // Loop para inserir os dados de cada personagem/vilão na tabela
    for (let i = 0; i < 3; i++) {
        let linhaJogador = tabelaJogador.insertRow(); // Cria uma nova linha na tabela do jogador
        let celulaJogadorNome = linhaJogador.insertCell(); // Cria uma célula para o nome do jogador
        let celulaJogadorForca = linhaJogador.insertCell(); // Cria uma célula para a força do jogador

        let linhaComputador = tabelaComputador.insertRow(); // Cria uma nova linha na tabela do computador
        let celulaComputadorNome = linhaComputador.insertCell(); // Cria uma célula para o nome do vilão
        let celulaComputadorForca = linhaComputador.insertCell(); // Cria uma célula para a força do vilão

        celulaJogadorNome.textContent = personagem[i]; // Insere o nome do personagem na célula
        celulaJogadorForca.textContent = forcaPersonagemIndividual[i]; // Insere a força de cada personagem na célula

        celulaComputadorNome.textContent = viloes[i]; // Insere o nome do vilão na célula
        celulaComputadorForca.textContent = forcaViloesIndividual[i]; // Insere a força de cada vilão na célula
    }
    totalJogadorElement.textContent = forcaPersonagem;
    totalComputadorElement.textContent = forcaViloes;
    resultadoFinal.style.display = "flex"; // Exibe o resultado final completo
}
