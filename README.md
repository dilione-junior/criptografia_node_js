# Criptografia com JavaScript

Site educativo sobre criptografia, com uma demonstração interativa de cifra por deslocamento de caracteres, no estilo da Cifra de César.

Apesar do nome do repositório, o código roda no navegador e não precisa de Node.js.

> **Finalidade didática:** esta cifra **não protege dados reais**, pois é facilmente revertida. Para dados reais, use algoritmos modernos, como AES-GCM, disponível na [Web Crypto API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Crypto_API).

## Como a cifra funciona

Cada caractere é substituído pelo caractere 3 posições à frente na tabela Unicode. Para decifrar, basta voltar as mesmas 3 posições.

```text
abc   -->  def
Olá   -->  Roä
```

```javascript
function cifraMensagem(mensagem, movimentos) {
    return mensagem.split('').map(caractere =>
        String.fromCharCode(caractere.charCodeAt(0) + movimentos)
    ).join('');
}
```

### Por que ela é insegura

- **O deslocamento é fixo:** quem conhece o valor 3 decifra qualquer mensagem.
- **É fácil de quebrar:** basta testar os deslocamentos possíveis ou analisar a frequência das letras.
- **Não detecta alterações:** a mensagem pode ser modificada sem que ninguém perceba.

## Como executar

Não há instalação nem etapa de build.

```bash
git clone https://github.com/dilione-junior/criptografia_node_js.git
cd criptografia_node_js
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`. Se preferir, abra o arquivo `index.html` diretamente no navegador.

## Estrutura

```text
index.html           Página inicial
algoritimos.html     Algoritmos de criptografia
cifrasClasic.html    Cifras clássicas
sobre.html           Sobre o projeto
javascript/main.js   Lógica da cifra
estilos/             Estilos
imagens/             Imagens
```

Desenvolvido por Dilione Junior.
