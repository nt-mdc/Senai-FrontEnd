// 1. Selecionamos o formulário de cadastro
// O querySelector busca a primeira tag <form> que encontrar no HTML
const formulario = document.getElementById('form');

// 2. Adicionamos um "ouvinte" para o evento de envio (submit)
// Usamos a sintaxe 'function(evento)' para ser mais claro para iniciantes
formulario.addEventListener('submit', function(evento) {
    
    // O comando abaixo impede que a página recarregue ao clicar no botão.
    // Isso é essencial para que o JavaScript consiga processar os dados.
    evento.preventDefault();

    // 3. Capturamos os valores digitados pelo usuário nos campos de texto
    // O .value extrai o texto que está dentro da caixa de entrada
    const nomeDigitado = document.getElementById('name').value;
    const emailDigitado = document.getElementById('email').value;
    const senhaDigitada = document.getElementById('password').value;
    const confirmacaoDigitada = document.getElementById('confirm-password').value;

    // --- VALIDAÇÃO 1: Verificação de Senhas ---
    // Verificamos se a senha e a confirmação são DIFERENTES (!==)
    if (senhaDigitada !== confirmacaoDigitada) {
        alert('As senhas não coincidem! Por favor, verifique.');
        return; // O return para a execução da função aqui (não salva o usuário)
    }

    // 4. Lógica de Busca no LocalStorage (O nosso "Banco de Dados" local)
    // O LocalStorage só guarda TEXTO. Por isso, usamos o JSON.parse para 
    // transformar esse texto de volta numa LISTA (Array) que o JS entenda.
    // O símbolo '|| []' significa: "se não houver nada salvo, comece com uma lista vazia".
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // --- VALIDAÇÃO 2: Verificação de E-mail Único ---
    // O método .find() percorre a lista procurando se já existe alguém com esse e-mail.
    const usuarioJaExiste = listaUsuarios.find(function(usuario) {
        return usuario.email === emailDigitado;
    });

    // Se o .find() encontrar alguém, a variável 'usuarioJaExiste' não será vazia.
    if (usuarioJaExiste) {
        alert('Este e-mail já está cadastrado. Tente outro!');
        return; // Interrompe o processo para não duplicar o cadastro
    }

    // 5. Se passou pelas validações, criamos um "Objeto" para o novo usuário
    // O objeto agrupa as informações de uma única pessoa numa "ficha" só.
    const novoUsuario = {
        nome: nomeDigitado,
        email: emailDigitado,
        senha: senhaDigitada
    };

    // 6. Adicionamos a nova "ficha" (objeto) no final da nossa "gaveta" (lista/array)
    listaUsuarios.push(novoUsuario);

    // 7. Salvamos a lista atualizada de volta no LocalStorage
    // Como o LS só aceita texto, usamos JSON.stringify para converter a lista em texto novamente.
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

    // 8. Feedback final e limpeza
    alert('Cadastro realizado com sucesso!');
    
    // O método .reset() limpa todos os campos do formulário automaticamente
    formulario.reset();
});