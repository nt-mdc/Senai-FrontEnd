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

    // --- LÓGICA DO CONTADOR DE ACESSOS (Atividade 4) ---
    
    // Pegamos a lista total de usuários para atualizar o banco de dados local
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Encontramos a posição desse usuário na lista através do e-mail (que é único)
    const indexUsuario = listaUsuarios.findIndex(function(usuario) {
        return usuario.email === usuarioLogado.email;
    });

    if (indexUsuario !== -1) {
        // Se o usuário não tiver a propriedade acessos ainda (carregando usuário antigo), começamos do 0
        if (listaUsuarios[indexUsuario].acessos === undefined) {
          listaUsuarios[indexUsuario].acessos = 0;
        }

        // Incrementamos em 1
        listaUsuarios[indexUsuario].acessos += 1;

        // Gravamos a lista inteira atualizada de volta no localStorage
        localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

        // Atualizamos também o objeto do "usuarioLogado" para refletir na interface desta sessão
        usuarioLogado.acessos = listaUsuarios[indexUsuario].acessos;
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));
    }

    // --- ATUALIZAÇÃO DA INTERFACE ---

    // 4. Selecionamos o título HTML onde a mensagem de boas vindas vai aparecer
    const tituloBoasVindas = document.getElementById('welcome-message');
    tituloBoasVindas.innerText = 'Bem-vindo(a), ' + usuarioLogado.nome + '!';

    // 5. Selecionamos o elemento do contador e injetamos a mensagem
    const elementoContador = document.getElementById('access-counter');
    elementoContador.innerText = 'Esta é a sua ' + usuarioLogado.acessos + 'ª vez visitando nossa plataforma!';
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