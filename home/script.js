// 1. Quando a página Home carrega, a primeira coisa que fazemos é 
// verificar se existe alguém "logado".
const usuarioLogadoString = localStorage.getItem('usuarioLogado');

// 2. Se não houver ninguém logado, devemos expulsar o usuário de volta para o login
if (!usuarioLogadoString) {
    alert('Acesso negado. Por favor, faça login primeiro.');
    window.location.href = '../login/index.html';
} else {
    // 3. Se houver usuário logado, transformamos a string salva em um Objeto JS novamente
    const usuarioLogado = JSON.parse(usuarioLogadoString);

    // 4. Selecionamos o título HTML onde a mensagem de boas vindas vai aparecer
    const tituloBoasVindas = document.getElementById('welcome-message');

    // 5. Injetamos o nome do usuário no HTML textualmente
    tituloBoasVindas.innerText = 'Bem-vindo(a), ' + usuarioLogado.nome + '!';
}

// ==========================================
// Lógica para o botão de "Sair" (Logout)
// ==========================================

// 6. Pegamos o botão de logout pelo ID
const botaoSair = document.getElementById('logout-button');

// 7. Adicionamos a ação de clique do botão
botaoSair.addEventListener('click', function() {
    // O logout consiste em apagar a marcação de quem está logado no navegador
    localStorage.removeItem('usuarioLogado');
    
    // E depois mandar a pessoa de volta pra tela de login
    window.location.href = '../login/index.html';
});