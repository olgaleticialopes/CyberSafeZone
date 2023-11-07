document.addEventListener('DOMContentLoaded', function() {
    const mensagemInput = document.getElementById('mensagem');
    const senhaInput = document.getElementById('senha');
    const criptografarButton = document.getElementById('criptografar');
    const descriptografarButton = document.getElementById('descriptografar');
    const mensagemCriptografadaSpan = document.getElementById('mensagem-criptografada');
    const mensagemDescriptografadaSpan = document.getElementById('mensagem-descriptografada');
    const senhaErro = document.getElementById('senha-erro');
    const mensagemErro = document.getElementById('mensagem-erro');

    criptografarButton.addEventListener('click', function() {
        mensagemErro.style.display = 'none';
        senhaErro.style.display = 'none';

        const mensagem = mensagemInput.value;
        const senha = senhaInput.value;

        if (mensagem && senha) {
            const mensagemCriptografada = CryptoJS.AES.encrypt(mensagem, senha).toString();
            mensagemCriptografadaSpan.style.display = 'block';
            mensagemCriptografadaSpan.querySelector('span').textContent = mensagemCriptografada;
            mensagemDescriptografadaSpan.style.display = 'none';


            // Armazene a mensagem criptografada localmente, por exemplo, em sessionStorage ou localStorage
            localStorage.setItem('mensagemCriptografada', mensagemCriptografada);
        } else {
            senhaErro.textContent = 'Por favor, insira uma mensagem e uma senha.';
            senhaErro.style.display = 'block';
        }
    });

    descriptografarButton.addEventListener('click', function() {
        senhaErro.style.display = 'none';
        mensagemErro.style.display = 'none';

        const mensagemCriptografada = localStorage.getItem('mensagemCriptografada');
        const senha = senhaInput.value;

        if (mensagemCriptografada && senha) {
            try {
                const bytes = CryptoJS.AES.decrypt(mensagemCriptografada, senha);
                const mensagemDescriptografada = bytes.toString(CryptoJS.enc.Utf8);

                if (mensagemDescriptografada) {
                    mensagemDescriptografadaSpan.style.display = 'block';
                    mensagemDescriptografadaSpan.querySelector('span').textContent = mensagemDescriptografada;
                    mensagemCriptografadaSpan.style.display = 'none';
                } else {
                    mensagemErro.style.display = 'block';
                    mensagemErro.textContent = 'A mensagem não coincide. Verifique a mensagem digitada.';
                }
            } catch (error) {
                senhaErro.style.display = 'block';
                senhaErro.textContent = 'A senha não coincide. Verifique a senha digitada.';
            }
        } else {
            senhaErro.textContent = 'Por favor, insira uma senha e a mensagem criptografada.';
            senhaErro.style.display = 'block';
        }
    });
});
