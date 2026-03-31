// 1. Selecionamos o formulário de login
// O querySelector localiza o formulário no HTML da página de login
const formularioLogin = document.getElementById('form');

// 2. Adicionamos o "ouvinte" para o envio do formulário
formularioLogin.addEventListener('submit', function (evento) {

    // Impede o recarregamento da página para processarmos os dados aqui
    evento.preventDefault();

    // 3. Capturamos os valores de e-mail e password que o utilizador digitou
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('password').value;

    // 4. Recuperamos a lista de utilizadores do LocalStorage
    // Se não houver nenhum utilizador cadastrado, recebemos uma lista vazia []
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // 5. Procuramos na lista se existe um utilizador com o e-mail E a password corretos
    // O método .find() percorre a lista e devolve o objeto se a condição for verdadeira
    const usuarioEncontrado = listaUsuarios.find(function (utilizador) {
        // Verificamos se o e-mail coincide E se a password também coincide
        return utilizador.email === emailDigitado && utilizador.senha === senhaDigitada;
    });

    // 6. Verificação do resultado da busca
    if (usuarioEncontrado) {
        // Se encontrarmos o utilizador na lista
        alert('Login efetuado com sucesso!');

        // Salvamos os dados do usuário atual em uma "sessão"
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));

        // Aqui redirecionamos o usuário para a página Home
        window.location.href = '../home/index.html';
    } else {
        // Se o .find() não encontrar nada (retornar undefined)
        alert('E-mail ou password incorretos. Por favor, tente novamente.');
    }
});