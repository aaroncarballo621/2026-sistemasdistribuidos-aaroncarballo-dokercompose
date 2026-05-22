document.addEventListener('DOMContentLoaded', function () {
const botao = document.querySelector('.btn-comprar');
botao.addEventListener('click', function () {
alert('Excelente!!! Voce comprou uma maquina de lavar roupas, famosa empregada sem soldo, ahgora fale com o Aaron para eviar a sua novisima maquina de lavar');
});
});
fetch('/api')
    .then(res => res.json())
    .then(data => {
        document.getElementById("hostname").innerText = data.hostname
    })
    .catch(err => {
        document.getElementById("hostname").innerText = "error"
        console.error(err)
    })