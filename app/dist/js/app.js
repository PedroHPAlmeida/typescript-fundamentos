import { NegociacaoController } from "./controllers/negociacaoController.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw new Error('O elemento form não existe');
}
const botaoImporta = document.querySelector('#botao-importa');
if (botaoImporta) {
    botaoImporta.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw new Error('Botão importa não foi encontrado');
}
