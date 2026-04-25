const imagens = [
    document.getElementById('cera-1'),
    document.getElementById('cera-2'),
    document.getElementById('cera-3'),
    document.getElementById('cera-5'),
    document.getElementById('cera-7'),
    document.getElementById('cera-8')
];

let index = 0;

const setaRight = document.getElementById('right');
const setaLeft = document.getElementById('left');

function atualizarCarrossel() {
    imagens.forEach((img, i) => {
        if (i === index) {
            img.style.opacity = '1';
            img.style.left = '50%';
            img.style.transform = 'translateX(-50%)';
        } else {
            img.style.opacity = '0';
            img.style.left = '-650px';
            img.style.transform = 'none';
        }
    });
}

// estado inicial
atualizarCarrossel();

setaRight.addEventListener('click', () => {
    index = (index + 1) % imagens.length;
    atualizarCarrossel();
});

setaLeft.addEventListener('click', () => {
    index = (index - 1 + imagens.length) % imagens.length;
    atualizarCarrossel();
});

const btnDownload = document.querySelector('.btn');

btnDownload.addEventListener('click', (e) => {
    e.preventDefault();

    const imagemAtual = imagens[index];
    const srcImagem = imagemAtual.src;

    const link = document.createElement('a');
    link.href = srcImagem;
    link.download = `micahel-cera-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

