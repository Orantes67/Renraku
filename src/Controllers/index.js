import { validar } from "./dependencia.js";
document.getElementById('agregarContacto').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const numero = parseInt(document.getElementById('numero').value);
    validar.objetocontacto.agregarcontactos(nombre, numero);
});

document.getElementById('mostrarContactos').addEventListener('click', () => {
    const agenda = validar.mostrarContactos();
    const agendaParagraph = document.getElementById('agenda');
    agendaParagraph.textContent = agenda;
});

document.getElementById('eliminarContactos').addEventListener('click', () => {
    validar.eliminarContactos();
});