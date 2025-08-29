🆕 Novidades da Versão

- Esta versão traz melhorias na experiência do usuário no gerador de senhas, com adição do seletor de tamanho de senha e cheat code interativo.

✅ Seletor de Tamanho de Senha

- Agora é possível escolher a quantidade de caracteres da senha entre 8 e 20.
- A seleção é feita via botões "+" e "-", garantindo controle preciso e visual do tamanho da senha.
- O seletor só aparece após o usuário ativar o cheat code, adicionando um elemento “secreto” divertido.

🎨 Integração Visual e Layout

- O seletor combina com o layout existente dos botões BatButton, mantendo coerência visual.

- Espaçamento e alinhamento ajustados para melhor experiência.

✨ Cheat Code Interativo

- Um "cheat code" foi adicionado no logo BatLogo.
- Ao clicar 5 vezes no logo, ele pulsa e pisca em vermelho.
- Após o usuário clicar OK no alerta "Secret Password Mode Activated!", o seletor de tamanho de senha é exibido.
- Esse efeito adiciona um elemento divertido e interativo ao app, sem necessidade de módulos extras.

⚙️ Código Limpo e de Fácil Manutenção

- BatButton e PasswordLengthSelector agora trabalham de forma modular.
- A geração de senha continua centralizada no serviço passwordService.ts, mantendo a lógica isolada.