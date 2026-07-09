# 🚀 Atividades de Fixação: Manipulação de DOM e Lógica com JavaScript

Este guia foca exclusivamente na parte lógica e na interação do JavaScript com o HTML (DOM), utilizando o sistema de autenticação que construímos como base.

---

## 🟡 Atividade 1: Captura de Novos Dados (DOM)

**Objetivo:** Praticar a captura de valores de novos elementos HTML e inseri-los em objetos.

1.  No arquivo `cadastro/index.html`, adicione um novo campo: `<input type="text" id="username" placeholder="Nome de usuário (apelido)" required>`.
2.  No arquivo `cadastro/script.js`, capture o valor deste novo campo no momento do `submit`.
3.  Inclua este "apelido" dentro do objeto `novoUsuario` antes de salvá-lo no `localStorage`.

---

## 🟡 Atividade 2: Validação Progressiva (Lógica e Eventos)

**Objetivo:** Interagir com o DOM em tempo real, sem depender apenas do envio do formulário.

1.  Crie um evento de "input" (digitação) no campo de senha do cadastro.
2.  Sempre que o usuário digitar, o JavaScript deve verificar se a senha tem pelo menos 6 caracteres.
3.  **Desafio:** Se a senha for curta, mude o texto de um parágrafo abaixo do campo para "Senha muito curta" em vermelho. Se tiver 6 ou mais, mude para "Senha adequada" em verde.

---

## 🟡 Atividade 3: Exibição Dinâmica na Home (Manipulação de Elementos)

**Objetivo:** Usar o JavaScript para alterar o conteúdo da página com base em dados salvos.

1.  No arquivo `home/index.html`, crie um elemento vazio: `<div id="user-info"></div>`.
2.  No arquivo `home/script.js`, após confirmar que o usuário está logado, crie dinamicamente (usando `document.createElement` ou `innerHTML`) uma lista que mostre:
    *   O Nome do Usuário;
    *   O E-mail do Usuário;
    *   O Apelido (criado na Atividade 1).

---

## 🟡 Atividade 4: Contador de Acessos (Persistência e Lógica)

**Objetivo:** Manipular o `localStorage` para criar contadores de comportamento.

1.  No objeto do usuário logado, adicione uma propriedade chamada `acessos` (iniciando em 0 no cadastro).
2.  Cada vez que o usuário entrar na página Home, o JavaScript deve aumentar em 1 o valor de `acessos` daquele usuário específico na lista geral e salvar de volta no `localStorage`.
3.  Exiba na Home o texto: "Esta é a sua [X]ª vez visitando nossa plataforma!".

---

## 🟡 Atividade 5: Busca de Usuários (Array Methods)

**Objetivo:** Praticar métodos de busca e filtros em listas de objetos.

1.  Na página inicial (`index.html`), crie um campo de busca e um botão "Verificar se e-mail existe".
2.  Ao clicar, o JavaScript deve percorrer a `listaUsuarios` do `localStorage` e dizer se aquele e-mail já está cadastrado ou não, sem precisar ir para a tela de login.

---

## 🏁 Critérios de Sucesso (Foco em JS)
- [ ] O JavaScript consegue ler o novo ID do HTML sem erros.
- [ ] O `localStorage` agora guarda objetos com mais propriedades (apelido, acessos).
- [ ] A página Home é alterada dinamicamente via JS ao carregar.
- [ ] A lógica de busca no array funciona corretamente retornando mensagens no console ou via alert.

**Lembre-se:** O foco aqui é o que acontece "por baixo do capô"! Deixe o visual em segundo plano e foque em dominar os IDs, Eventos e Métodos de Array. 🧠💻
