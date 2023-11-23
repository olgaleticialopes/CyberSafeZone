function criptografar() {
    const senha = document.getElementById('senha').value;
    const chaveSecreta = document.getElementById('chaveSecreta').value;
    const chaveUsuario = document.getElementById('chaveSecretaDescript').value;

    if (chaveSecreta && chaveUsuario && chaveSecreta === chaveUsuario) {
        const senhaCriptografada = CryptoJS.AES.encrypt(senha, chaveSecreta).toString();
        document.getElementById('resultado').innerText = `Senha Criptografada: ${senhaCriptografada}`;
    } else {
        document.getElementById('resultado').innerText = 'Chave Secreta Inválida';
    }

    // verifica se os campos estao vazios
    if (senha.trim() === '' || chaveSecreta.trim() === '') {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos.';
        return;
    }



        
}




function descriptografar() {
    const senhaCriptografada = document.getElementById('resultado').innerText.split(':')[1].trim();
    const chaveSecreta = document.getElementById('chaveSecreta').value;
    const chaveUsuario = document.getElementById('chaveSecretaDescript').value;
    
    

   if (chaveSecreta === chaveUsuario) {
        const senhaDescriptografada = CryptoJS.AES.decrypt(senhaCriptografada, chaveSecreta).toString(CryptoJS.enc.Utf8);
        document.getElementById('resultado').innerText = `Senha Descriptografada: ${senhaDescriptografada}`;
   } else {
        document.getElementById('resultado').innerText = 'Chave Secreta Inválida';
    }
    
       // verifica se os campos estao vazios
    if (chaveUsuario.trim() === '' || chaveSecreta.trim() === '') {
        document.getElementById('resultado').innerText = 'Por favor, preencha todos os campos.';
        return;
    }

    if (senhaCriptografada.trim() === '') {
        document.getElementById('resultado').innerText = 'Criptografia ja Realizada, Insira outra Mensagem';
        return;
    }
    




}