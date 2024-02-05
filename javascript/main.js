function executarCriptografia() {
    const mensagemSecreta = prompt("Escreva sua mensagem secreta");
    console.log(mensagemSecreta);

    function mostrarResultado(frase) {
        alert(frase);
        alert("Clique no botão novamente para criptografar ou continue navegando,Obrigado😃🎈🎉");
    }

    function cifraMensagem(mensagem, movimentos) {
        const mensagemCifrada = mensagem.split('').map(caractere => {
            const codigoCaractere = caractere.charCodeAt(0);
            return String.fromCharCode(codigoCaractere + movimentos);
        });

        return mensagemCifrada.join('');
    }

    const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
    console.log(mensagemCifrada);

    function decifraMensagem(mensagem, movimentos) {
        const mensagemCifrada = mensagem.split('').map(caractere => {
            const codigoCaractere = caractere.charCodeAt(0);
            return String.fromCharCode(codigoCaractere - movimentos);
        });

        return mensagemCifrada.join('');
    }

    const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
    console.log(mensagemDecifrada);

    mostrarResultado("Sua mensagem criptografada é " + mensagemCifrada);
}
